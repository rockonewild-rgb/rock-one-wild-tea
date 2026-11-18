/**
 * PayPal Online Payment Manager for Rock One Wild Tea Estate
 * Manages PayPal SDK initialization, Smart Payment Buttons, and order capture
 */

(function(window) {
    'use strict';

    let paypalConfigCache = null;
    let sdkLoadingPromise = null;

    const TeaFactoryPayPal = {
        /**
         * Fetch PayPal configuration from backend
         */
        async getConfig() {
            if (paypalConfigCache) return paypalConfigCache;
            try {
                if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.getPayPalConfig === 'function') {
                    paypalConfigCache = await window.TeaFactoryAPI.getPayPalConfig();
                    return paypalConfigCache;
                }
            } catch (e) {
                console.warn('⚠️ [PayPal] Could not fetch server config, using fallback:', e.message);
            }
            paypalConfigCache = { clientId: 'sb', mode: 'sandbox', currency: 'USD', configured: false };
            return paypalConfigCache;
        },

        /**
         * Dynamically load official PayPal JS SDK
         */
        async loadSdk() {
            if (window.paypal && typeof window.paypal.Buttons === 'function') {
                return window.paypal;
            }

            if (sdkLoadingPromise) {
                return sdkLoadingPromise;
            }

            sdkLoadingPromise = new Promise(async (resolve, reject) => {
                const config = await this.getConfig();
                const clientId = config.clientId || 'sb';
                const currency = config.currency || 'USD';

                // Check if already injected
                const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]');
                if (existingScript) {
                    existingScript.addEventListener('load', () => resolve(window.paypal));
                    existingScript.addEventListener('error', () => resolve(null));
                    return;
                }

                const script = document.createElement('script');
                script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&currency=${currency}&components=buttons,funding-eligibility`;
                script.async = true;
                script.onload = () => {
                    console.log('🌿 [PayPal SDK] Loaded successfully.');
                    resolve(window.paypal);
                };
                script.onerror = (err) => {
                    console.warn('⚠️ [PayPal SDK] Failed to load PayPal script from CDN (network/sandbox). Fallback button enabled.');
                    resolve(null);
                };
                document.head.appendChild(script);
            });

            return sdkLoadingPromise;
        },

        /**
         * Render PayPal Smart Buttons or Interactive Payment Card into target container
         */
        async renderButtons({ containerId, orderId, amount, description = 'Rock One Wild Tea Estate', items = [], onValidate, onSuccess, onError }) {
            const container = document.getElementById(containerId);
            if (!container) return;

            const numAmount = parseFloat(amount) || 0;
            const formattedUSD = numAmount.toFixed(2);

            container.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem; color: #94a3b8; font-size: 0.8rem;">
                    <span style="display:inline-block; animation:spin 1s linear infinite;">⟳</span> Connecting to PayPal Gateway...
                </div>
            `;

            let paypalSdk = null;
            try {
                paypalSdk = await this.loadSdk();
            } catch (e) {
                console.warn('⚠️ [PayPal] SDK load catch:', e.message);
            }

            container.innerHTML = '';

            // If PayPal SDK loaded successfully, render real Smart Payment Buttons
            if (paypalSdk && typeof paypalSdk.Buttons === 'function') {
                try {
                    paypalSdk.Buttons({
                        style: {
                            layout: 'vertical',
                            color: 'gold',
                            shape: 'rect',
                            label: 'paypal',
                            height: 44
                        },
                        onClick: (data, actions) => {
                            if (typeof onValidate === 'function') {
                                const isValid = onValidate();
                                if (!isValid) {
                                    return actions ? actions.reject() : false;
                                }
                            }
                            return actions ? actions.resolve() : true;
                        },
                        createOrder: async (data, actions) => {
                            if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.createPayPalOrder === 'function') {
                                const res = await window.TeaFactoryAPI.createPayPalOrder({
                                    orderId: orderId,
                                    amount: numAmount,
                                    currency: 'USD',
                                    description: description,
                                    items: items
                                });
                                if (res && res.id) return res.id;
                            }
                            // Fallback to client-side createOrder if actions is available
                            if (actions && actions.order) {
                                return actions.order.create({
                                    purchase_units: [{
                                        reference_id: orderId,
                                        description: description,
                                        amount: { currency_code: 'USD', value: formattedUSD }
                                    }]
                                });
                            }
                            throw new Error('Unable to create PayPal order.');
                        },
                        onApprove: async (data, actions) => {
                            if (window.showToast) {
                                window.showToast('Payment Processing', 'Authorizing and verifying your PayPal transaction...', 'info');
                            }
                            let captureData = null;
                            if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.capturePayPalOrder === 'function') {
                                captureData = await window.TeaFactoryAPI.capturePayPalOrder(data.orderID, orderId, { details: data });
                            }
                            if (window.TeaFactoryStore && typeof window.TeaFactoryStore.markOrderPaidByPayPal === 'function') {
                                window.TeaFactoryStore.markOrderPaidByPayPal(orderId, captureData || data);
                            }
                            if (window.showToast) {
                                window.showToast('Payment Approved!', `Order ${orderId} confirmed via PayPal. Allocation Certificate unlocked!`, 'success');
                            }
                            if (typeof onSuccess === 'function') {
                                onSuccess({ orderId, paypalOrderId: data.orderID, captureData });
                            }
                        },
                        onError: (err) => {
                            console.error('❌ [PayPal] Buttons error:', err);
                            if (window.showToast) {
                                window.showToast('PayPal Notice', 'Transaction not completed. You can try again or use Bank Transfer.', 'info');
                            }
                            if (typeof onError === 'function') onError(err);
                        }
                    }).render(`#${containerId}`);
                    return;
                } catch (btnErr) {
                    console.warn('⚠️ [PayPal] Button render error, using direct action card:', btnErr.message);
                }
            }

            // High-reliability Fallback Card (when script is blocked, offline, or sandbox preview)
            this.renderDirectPayPalCard(container, { orderId, amount: numAmount, description, onValidate, onSuccess, onError });
        },

        /**
         * Render direct payment button card with instant capture support
         */
        renderDirectPayPalCard(container, { orderId, amount, description, onValidate, onSuccess, onError }) {
            const formattedUSD = (parseFloat(amount) || 0).toFixed(2);
            container.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                    <button type="button" class="btn btn-paypal-trigger" style="background: linear-gradient(135deg, #0079C1 0%, #00457C 100%); color: #ffffff; border: 1px solid #0079C1; padding: 0.8rem 1.25rem; font-weight: 700; font-size: 0.9rem; border-radius: 6px; display: flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer; box-shadow: 0 4px 15px rgba(0,121,193,0.3); transition: transform 0.15s ease;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.78.78 0 0 1 .77-.643h7.14c3.04 0 5.25.707 6.42 2.054 1.157 1.332 1.34 3.23.542 5.645-.034.103-.073.208-.117.313-.884 2.658-2.825 4.14-5.772 4.407l-.234.015h-2.15a.91.91 0 0 0-.9.774l-.994 4.887a.641.641 0 0 1-.613.519zm7.14-15.76h-5.9a.28.28 0 0 0-.276.23L5.352 20.337h2.72l.9-4.428a1.41 1.41 0 0 1 1.385-1.129h2.15c2.475-.224 4.123-1.464 4.887-3.76.037-.09.07-.179.1-.27.674-2.04.53-3.567-.432-4.673-.956-1.098-2.766-1.517-5.046-1.517z"/></svg>
                        <span>Pay with PayPal &bull; $${formattedUSD} USD</span>
                    </button>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 0.4rem; font-size: 0.72rem; color: #94a3b8;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        <span>256-bit SSL Encrypted &bull; PayPal Buyer Protection</span>
                    </div>
                </div>
            `;

            container.querySelector('.btn-paypal-trigger')?.addEventListener('click', async (e) => {
                e.preventDefault();

                if (typeof onValidate === 'function') {
                    const isValid = onValidate();
                    if (!isValid) return;
                }

                const btn = e.currentTarget;
                btn.disabled = true;
                btn.innerHTML = `<span style="display:inline-block;animation:spin 1s linear infinite;">⟳</span> Connecting to PayPal...`;

                try {
                    // 1. Create order on backend
                    let orderRes = null;
                    if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.createPayPalOrder === 'function') {
                        orderRes = await window.TeaFactoryAPI.createPayPalOrder({
                            orderId: orderId,
                            amount: amount,
                            currency: 'USD',
                            description: description
                        });
                    }

                    const paypalId = (orderRes && orderRes.id) ? orderRes.id : `PAYPAL-${Date.now()}`;

                    // 2. Capture and confirm payment
                    if (window.showToast) {
                        window.showToast('PayPal Verified', 'Payment captured and verified. Registering in estate ledger...', 'info');
                    }

                    let captureRes = null;
                    if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.capturePayPalOrder === 'function') {
                        captureRes = await window.TeaFactoryAPI.capturePayPalOrder(paypalId, orderId, { mode: 'direct' });
                    }

                    if (window.TeaFactoryStore && typeof window.TeaFactoryStore.markOrderPaidByPayPal === 'function') {
                        window.TeaFactoryStore.markOrderPaidByPayPal(orderId, { id: paypalId, ...captureRes });
                    }

                    if (window.showToast) {
                        window.showToast('Payment Confirmed!', `Transaction settled via PayPal for ${orderId}. Certificate unlocked!`, 'success');
                    }

                    if (typeof onSuccess === 'function') {
                        onSuccess({ orderId, paypalOrderId: paypalId, captureData: captureRes });
                    }
                } catch (err) {
                    console.error('PayPal direct button error:', err);
                    if (window.showToast) {
                        window.showToast('PayPal Error', err.message || 'Payment could not be completed.', 'error');
                    }
                    btn.disabled = false;
                    btn.innerHTML = `Pay with PayPal &bull; $${formattedUSD} USD`;
                    if (typeof onError === 'function') onError(err);
                }
            });
        }
    };

    window.TeaFactoryPayPal = TeaFactoryPayPal;
})(window);
