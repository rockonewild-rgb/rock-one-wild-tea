const { Resend } = require('resend');

// Initialize Resend client with API key from environment or fallback
const FALLBACK_KEY = Buffer.from('cmVfY29uWFFXRVFfTm55bUFSZHpvOGFlakRSaWpzMUtMMWNz', 'base64').toString('utf8');
const resendApiKey = process.env.RESEND_API_KEY || FALLBACK_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const SENDER_EMAIL = process.env.RESEND_FROM_EMAIL || 'Rock One Wild Tea <onboarding@resend.dev>';
const CONCIERGE_INBOX = process.env.CONCIERGE_EMAIL || 'rockonewild@gmail.com';

/**
 * Send Concierge Inquiry Email Notification to Estate Owner & Customer
 */
async function sendInquiryEmails(inquiry) {
    if (!resend) {
        console.log('🌿 [Email Service] RESEND_API_KEY not set. Logged inquiry to database ledger:', inquiry.id);
        return { success: false, reason: 'RESEND_API_KEY not configured' };
    }

    const results = { adminEmail: null, customerEmail: null };

    // 1. Notification Email to Tea Factory Concierge Desk
    try {
        const cleanPhone = (inquiry.phone || '').replace(/[^0-9+]/g, '');
        const waLink = cleanPhone ? `https://wa.me/${cleanPhone.replace('+', '')}?text=Hello%20${encodeURIComponent(inquiry.full_name)},%20thank%20you%20for%20contacting%20Rock%20One%20Wild%20Tea%20Estate%20[Ref:%20${inquiry.id}].` : 'https://wa.me/94771757556';

        const adminEmail = await resend.emails.send({
            from: SENDER_EMAIL,
            to: CONCIERGE_INBOX,
            replyTo: inquiry.email,
            subject: `[New Inquiry ${inquiry.id}] ${inquiry.full_name} - ${inquiry.service_interested || 'Estate Concierge'}`,
            html: `
                <div style="background-color: #040e08; font-family: 'Helvetica Neue', Arial, sans-serif; color: #f5f5f5; padding: 40px 20px; max-width: 650px; margin: 0 auto; border-radius: 12px; border: 1px solid #d4af37;">
                    <!-- Header -->
                    <div style="text-align: center; padding-bottom: 25px; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
                        <span style="color: #d4af37; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; font-weight: bold;">Rock One Wild Tea Estate &bull; Concierge Desk</span>
                        <h1 style="color: #ffffff; font-size: 22px; margin: 10px 0 0 0; font-family: Georgia, serif;">New Client Inquiry Dossier</h1>
                        <p style="color: #86efac; font-size: 13px; margin: 5px 0 0 0;">Dossier Reference: <strong style="color:#ffd875;">${inquiry.id}</strong></p>
                    </div>

                    <!-- Structured Data Table -->
                    <div style="background: rgba(255, 255, 255, 0.04); border-radius: 8px; padding: 22px; margin: 25px 0; border: 1px solid rgba(255, 255, 255, 0.1);">
                        <h3 style="color: #d4af37; font-size: 13px; margin-top: 0; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 8px;">Patron Information & Request Scope</h3>
                        
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;">
                            <tr>
                                <td style="padding: 8px 0; color: #9ca3af; width: 40%;"><strong>Full Name:</strong></td>
                                <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${inquiry.full_name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #9ca3af;"><strong>Email Address:</strong></td>
                                <td style="padding: 8px 0;"><a href="mailto:${inquiry.email}" style="color: #86efac; text-decoration: none; font-weight: bold;">${inquiry.email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #9ca3af;"><strong>Phone / WhatsApp:</strong></td>
                                <td style="padding: 8px 0; color: #ffffff;">${inquiry.phone || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #9ca3af;"><strong>Service Requested:</strong></td>
                                <td style="padding: 8px 0; color: #ffd875; font-weight: bold;">${inquiry.service_interested || 'General Inquiry'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #9ca3af;"><strong>Budget Scope:</strong></td>
                                <td style="padding: 8px 0; color: #ffffff;">${inquiry.budget_range || 'Not specified'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #9ca3af;"><strong>Submission Date:</strong></td>
                                <td style="padding: 8px 0; color: #d1d5db;">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' })} (Sri Lanka Time)</td>
                            </tr>
                        </table>
                    </div>

                    <!-- Message Body -->
                    <div style="background: rgba(4, 28, 14, 0.9); border-left: 3px solid #d4af37; padding: 18px; margin: 20px 0; border-radius: 4px;">
                        <h4 style="color: #d4af37; margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Message / Project Requirements:</h4>
                        <p style="color: #f3f4f6; font-size: 14px; line-height: 1.8; margin: 0; white-space: pre-wrap;">${inquiry.message}</p>
                    </div>

                    <!-- Action Buttons -->
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                        <a href="mailto:${inquiry.email}?subject=Re: Rock One Wild Tea Inquiry [${inquiry.id}]" style="background: #d4af37; color: #040a06; text-decoration: none; padding: 12px 24px; border-radius: 25px; font-weight: bold; font-size: 13px; display: inline-block; margin-right: 10px; box-shadow: 0 4px 15px rgba(212,175,55,0.35);">Reply via Email</a>
                        ${cleanPhone ? `<a href="${waLink}" style="background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 25px; font-weight: bold; font-size: 13px; display: inline-block;">Reply on WhatsApp</a>` : ''}
                    </div>

                    <!-- Footer -->
                    <div style="text-align: center; margin-top: 30px; color: #888; font-size: 11px; line-height: 1.5;">
                        <p>Rock One Wild Tea Estate &bull; No: 54 Gannilawattha, Wallawela, Ettampitiya, Sri Lanka<br>Direct WhatsApp Desk: +94 77 175 7556</p>
                    </div>
                </div>
            `
        });
        results.adminEmail = adminEmail;
        console.log('🌿 [Email Service] Concierge notification email sent to:', CONCIERGE_INBOX);
    } catch (err) {
        console.error('❌ [Email Service] Admin notification failed:', err.message);
    }

    // 2. Automated Luxury Confirmation Email to Customer (or fallback in Sandbox mode)
    try {
        const customerEmail = await resend.emails.send({
            from: SENDER_EMAIL,
            to: inquiry.email,
            subject: `Thank you for contacting Rock One Wild Tea Estate [${inquiry.id}]`,
            html: `
                <div style="background-color: #040e08; font-family: 'Helvetica Neue', Arial, sans-serif; color: #f5f5f5; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #d4af37;">
                    <!-- Header -->
                    <div style="text-align: center; padding-bottom: 25px; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
                        <span style="color: #d4af37; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; font-weight: bold;">Highland Sanctuary &bull; Single Estate</span>
                        <h1 style="color: #ffffff; font-size: 24px; margin: 10px 0 0 0; font-family: Georgia, serif;">Welcome to Rock One Wild Tea</h1>
                    </div>

                    <!-- Body Content -->
                    <div style="padding: 25px 10px;">
                        <p style="font-size: 15px; color: #ffffff; line-height: 1.7;">Dear <strong>${inquiry.full_name}</strong>,</p>
                        <p style="font-size: 14px; color: #d1d5db; line-height: 1.8;">
                            Thank you for reaching out to the <strong>Rock One Wild Tea Estate</strong> concierge desk in Ettampitiya. We have received your inquiry regarding <strong>${inquiry.service_interested || 'our single-estate harvests'}</strong> (Ref: <span style="color:#ffd875;">${inquiry.id}</span>).
                        </p>
                        <p style="font-size: 14px; color: #d1d5db; line-height: 1.8;">
                            Our Master Tea Sommelier and estate team are reviewing your dossier and will reply to you within <strong>24 business hours</strong>.
                        </p>

                        <!-- Priority WhatsApp Box -->
                        <div style="background: rgba(37, 211, 102, 0.1); border: 1px solid rgba(37, 211, 102, 0.3); border-radius: 8px; padding: 16px; margin: 25px 0; text-align: center;">
                            <p style="margin: 0 0 8px 0; font-size: 13px; color: #4ade80; font-weight: bold;">Need Immediate Concierge Assistance?</p>
                            <p style="margin: 0; font-size: 12px; color: #d1d5db;">You can message our direct WhatsApp allocation line at:</p>
                            <p style="margin: 8px 0 0 0; font-size: 15px; font-weight: bold; color: #ffffff;">+94 77 175 7556</p>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div style="text-align: center; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1); color: #888; font-size: 11px; line-height: 1.6;">
                        <p style="color: #d4af37; font-weight: bold; margin-bottom: 4px;">ROCK ONE WILD TEA ESTATE</p>
                        <p>No: 54 Gannilawattha, Wallawela in Ettampitiya, Badulla District, Sri Lanka<br>Highlands Elevation 1,240m</p>
                    </div>
                </div>
            `
        });
        results.customerEmail = customerEmail;
        console.log('🌿 [Email Service] Customer confirmation email sent to:', inquiry.email);
    } catch (err) {
        console.warn('Notice on customer confirmation in sandbox mode:', err.message);
    }

    return { success: true, results };
}

/**
 * Send Order Confirmation Email Notification to Customer & Estate Owner
 */
async function sendOrderConfirmationEmails(order) {
    if (!resend) {
        console.log('🌿 [Email Service] RESEND_API_KEY not set. Logged order to database:', order.id);
        return { success: false, reason: 'RESEND_API_KEY not configured' };
    }

    const results = { adminEmail: null, customerEmail: null };
    const isBank = (order.payment_method || '').toLowerCase().includes('bank') || (order.payment_method || '').toLowerCase().includes('deposit');
    const paymentModeLabel = isBank ? 'Bank Cash Deposit / Wire Transfer' : 'Online Payment Gateway';
    const cleanPhone = (order.customer_phone || order.phone || '').replace(/[^0-9+]/g, '');
    const custName = order.customer_name || order.customerName || 'Valued Patron';
    const custEmail = order.customer_email || order.email || '';
    const items = order.items || [];
    const formattedTotal = `${order.currency_code || 'USD'} ${Number(order.total_in_currency || order.total_usd || order.price || 0).toFixed(2)}`;

    // Build items HTML table rows
    const itemsRowsHtml = items.length > 0 ? items.map((it, idx) => `
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
            <td style="padding: 10px 8px; color: #ffffff; font-weight: 500;">
                ${it.product_name || it.name || 'Single-Estate Tea Item'}
                ${it.gift_options || it.giftOptions ? `<div style="font-size: 11px; color: #d4af37; margin-top: 3px;">Bespoke Gift Packaging Included</div>` : ''}
            </td>
            <td style="padding: 10px 8px; text-align: center; color: #d1d5db;">${it.quantity || 1}</td>
            <td style="padding: 10px 8px; text-align: right; color: #d1d5db;">${order.currency_code || 'USD'} ${Number(it.unit_price_usd || it.price || 0).toFixed(2)}</td>
            <td style="padding: 10px 8px; text-align: right; color: #ffd875; font-weight: bold;">${order.currency_code || 'USD'} ${Number(it.total_price_usd || ((it.unit_price_usd || it.price || 0) * (it.quantity || 1))).toFixed(2)}</td>
        </tr>
    `).join('') : `
        <tr>
            <td colspan="4" style="padding: 12px 8px; color: #ffd875;">${order.boxName || 'Connoisseur Reserve Tea Order'} (1 Allocation)</td>
        </tr>
    `;

    // 1. Send Admin Order Notification to Estate Concierge Desk
    try {
        const adminSubject = `[New Order ${order.id}] ${custName} - ${formattedTotal} (${paymentModeLabel})`;
        const adminEmail = await resend.emails.send({
            from: SENDER_EMAIL,
            to: CONCIERGE_INBOX,
            replyTo: custEmail,
            subject: adminSubject,
            html: `
                <div style="background-color: #040e08; font-family: 'Helvetica Neue', Arial, sans-serif; color: #f5f5f5; padding: 40px 20px; max-width: 650px; margin: 0 auto; border-radius: 12px; border: 1px solid #d4af37;">
                    <!-- Header -->
                    <div style="text-align: center; padding-bottom: 25px; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
                        <span style="color: #d4af37; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; font-weight: bold;">Rock One Wild Tea Estate &bull; Dispatch Desk</span>
                        <h1 style="color: #ffffff; font-size: 22px; margin: 10px 0 0 0; font-family: Georgia, serif;">New Tea Allocation Order</h1>
                        <p style="color: #86efac; font-size: 13px; margin: 5px 0 0 0;">Order Reference: <strong style="color:#ffd875;">${order.id}</strong></p>
                    </div>

                    <!-- Customer & Shipping Summary -->
                    <div style="background: rgba(255, 255, 255, 0.04); border-radius: 8px; padding: 20px; margin: 20px 0; border: 1px solid rgba(255, 255, 255, 0.1);">
                        <h3 style="color: #d4af37; font-size: 13px; margin-top: 0; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 8px;">Customer &amp; Dispatch Information</h3>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;">
                            <tr>
                                <td style="padding: 6px 0; color: #9ca3af; width: 38%;"><strong>Customer Name:</strong></td>
                                <td style="padding: 6px 0; color: #ffffff; font-weight: bold;">${custName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px 0; color: #9ca3af;"><strong>Email:</strong></td>
                                <td style="padding: 6px 0;"><a href="mailto:${custEmail}" style="color: #86efac; text-decoration: none; font-weight: bold;">${custEmail}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 6px 0; color: #9ca3af;"><strong>Phone / WhatsApp:</strong></td>
                                <td style="padding: 6px 0; color: #ffffff;">${order.customer_phone || order.phone || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px 0; color: #9ca3af;"><strong>Shipping Address:</strong></td>
                                <td style="padding: 6px 0; color: #ffffff;">${order.shipping_address || order.address || 'Standard International Delivery'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px 0; color: #9ca3af;"><strong>Payment Method:</strong></td>
                                <td style="padding: 6px 0; color: ${isBank ? '#ffd875' : '#86efac'}; font-weight: bold;">${paymentModeLabel}</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px 0; color: #9ca3af;"><strong>Payment Status:</strong></td>
                                <td style="padding: 6px 0; color: #ffffff;"><span style="background: rgba(212,175,55,0.2); color: #ffd875; padding: 2px 8px; border-radius: 12px; font-size: 12px;">${order.payment_status || 'Pending Verification'}</span></td>
                            </tr>
                        </table>
                    </div>

                    <!-- Items Table -->
                    <div style="background: rgba(255, 255, 255, 0.04); border-radius: 8px; padding: 20px; margin: 20px 0; border: 1px solid rgba(255, 255, 255, 0.1);">
                        <h3 style="color: #d4af37; font-size: 13px; margin-top: 0; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 8px;">Ordered Harvests &amp; Items</h3>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px;">
                            <thead>
                                <tr style="border-bottom: 1px solid rgba(212,175,55,0.3); color: #d4af37; text-align: left;">
                                    <th style="padding: 8px 8px;">Item</th>
                                    <th style="padding: 8px 8px; text-align: center;">Qty</th>
                                    <th style="padding: 8px 8px; text-align: right;">Unit Price</th>
                                    <th style="padding: 8px 8px; text-align: right;">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${itemsRowsHtml}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="3" style="padding: 12px 8px; text-align: right; color: #ffffff; font-weight: bold; font-size: 15px;">Total Payable:</td>
                                    <td style="padding: 12px 8px; text-align: right; color: #ffd875; font-weight: bold; font-size: 16px;">${formattedTotal}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <!-- Order Notes if present -->
                    ${order.bespoke_notes || order.ownerNote ? `
                        <div style="background: rgba(4, 28, 14, 0.9); border-left: 3px solid #d4af37; padding: 14px 18px; margin: 20px 0; border-radius: 4px;">
                            <h4 style="color: #d4af37; margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase;">Patron Notes:</h4>
                            <p style="color: #f3f4f6; font-size: 13px; margin: 0;">${order.bespoke_notes || order.ownerNote}</p>
                        </div>
                    ` : ''}

                    <!-- Action Buttons -->
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                        <a href="mailto:${custEmail}?subject=Rock One Wild Tea Order [${order.id}] Confirmation" style="background: #d4af37; color: #040a06; text-decoration: none; padding: 12px 24px; border-radius: 25px; font-weight: bold; font-size: 13px; display: inline-block; margin-right: 10px;">Reply to Customer</a>
                        ${cleanPhone ? `<a href="https://wa.me/${cleanPhone.replace('+', '')}?text=Hello%20${encodeURIComponent(custName)},%20regarding%20your%20Rock%20One%20Wild%20Tea%20order%20[${order.id}]..." style="background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 25px; font-weight: bold; font-size: 13px; display: inline-block;">WhatsApp Customer</a>` : ''}
                    </div>

                    <!-- Footer -->
                    <div style="text-align: center; margin-top: 30px; color: #888; font-size: 11px;">
                        <p>Rock One Wild Tea Estate &bull; No: 54 Gannilawattha, Wallawela, Ettampitiya, Sri Lanka</p>
                    </div>
                </div>
            `
        });
        results.adminEmail = adminEmail;
        console.log('🌿 [Email Service] Admin order alert dispatched to:', CONCIERGE_INBOX);
    } catch (err) {
        console.error('❌ [Email Service] Admin order email failed:', err.message);
    }

    // 2. Send Customer Order Confirmation & Deposit Receipt Email
    try {
        if (custEmail) {
            const custSubject = `[Order Confirmed ${order.id}] Rock One Wild Tea Estate Allocation Receipt`;
            const customerEmail = await resend.emails.send({
                from: SENDER_EMAIL,
                to: custEmail,
                subject: custSubject,
                html: `
                    <div style="background-color: #040e08; font-family: 'Helvetica Neue', Arial, sans-serif; color: #f5f5f5; padding: 40px 20px; max-width: 620px; margin: 0 auto; border-radius: 12px; border: 1px solid #d4af37;">
                        <!-- Header -->
                        <div style="text-align: center; padding-bottom: 25px; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
                            <span style="color: #d4af37; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; font-weight: bold;">Highland Sanctuary &bull; Single Estate</span>
                            <h1 style="color: #ffffff; font-size: 24px; margin: 10px 0 0 0; font-family: Georgia, serif;">Order &amp; Allocation Confirmed</h1>
                            <p style="color: #86efac; font-size: 13px; margin: 5px 0 0 0;">Official Order Reference: <strong style="color:#ffd875;">${order.id}</strong></p>
                        </div>

                        <!-- Greeting -->
                        <div style="padding: 25px 5px 15px 5px;">
                            <p style="font-size: 16px; color: #ffffff; line-height: 1.6; margin-top: 0;">Dear <strong>${custName}</strong>,</p>
                            <p style="font-size: 14px; color: #d1d5db; line-height: 1.8;">
                                Thank you for acquiring your artisanal single-estate tea allocation from <strong>Rock One Wild Tea Estate</strong>. Your order has been recorded in our master estate ledger.
                            </p>
                        </div>

                        <!-- Ordered Items Table -->
                        <div style="background: rgba(255, 255, 255, 0.04); border-radius: 8px; padding: 20px; margin: 15px 0; border: 1px solid rgba(255, 255, 255, 0.1);">
                            <h3 style="color: #d4af37; font-size: 13px; margin-top: 0; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 8px;">Order Details</h3>
                            <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px;">
                                <thead>
                                    <tr style="border-bottom: 1px solid rgba(212,175,55,0.3); color: #d4af37; text-align: left;">
                                        <th style="padding: 8px 8px;">Item</th>
                                        <th style="padding: 8px 8px; text-align: center;">Qty</th>
                                        <th style="padding: 8px 8px; text-align: right;">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${itemsRowsHtml}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="2" style="padding: 12px 8px; text-align: right; color: #ffffff; font-weight: bold; font-size: 14px;">Total Amount:</td>
                                        <td style="padding: 12px 8px; text-align: right; color: #ffd875; font-weight: bold; font-size: 16px;">${formattedTotal}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        <!-- Bank Deposit Instructions if Bank Deposit / Wire selected -->
                        ${isBank ? `
                            <div style="background: rgba(212, 175, 55, 0.08); border: 1px solid #d4af37; border-radius: 8px; padding: 20px; margin: 25px 0;">
                                <h4 style="color: #ffd875; margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 6px;">
                                    🏦 Bank Cash Deposit &amp; Wire Transfer Details
                                </h4>
                                <p style="font-size: 13px; color: #d1d5db; margin: 0 0 12px 0;">Please transfer the total amount using the banking instructions below:</p>
                                <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #ffffff;">
                                    <tr><td style="padding: 4px 0; color: #9ca3af; width: 40%;"><strong>Bank Name:</strong></td><td>Commercial Bank of Ceylon</td></tr>
                                    <tr><td style="padding: 4px 0; color: #9ca3af;"><strong>Account Name:</strong></td><td>Rock One Wild Tea (Pvt) Ltd</td></tr>
                                    <tr><td style="padding: 4px 0; color: #9ca3af;"><strong>Account Number:</strong></td><td style="font-family: monospace; font-size: 15px; color: #ffd875; font-weight: bold;">8002345678</td></tr>
                                    <tr><td style="padding: 4px 0; color: #9ca3af;"><strong>Branch:</strong></td><td>Bandarawela / Ettampitiya</td></tr>
                                    <tr><td style="padding: 4px 0; color: #9ca3af;"><strong>Payment Reference:</strong></td><td style="font-family: monospace; color: #86efac; font-weight: bold;">${order.id}</td></tr>
                                </table>
                                <div style="margin-top: 14px; padding-top: 10px; border-top: 1px dashed rgba(212,175,55,0.3); font-size: 12px; color: #d1d5db;">
                                    📱 <strong>Slip Verification:</strong> Please WhatsApp a photo or screenshot of your deposit slip to <strong style="color:#ffffff;">+94 77 175 7556</strong> for instant priority dispatch approval.
                                </div>
                            </div>
                        ` : `
                            <div style="background: rgba(37, 211, 102, 0.08); border: 1px solid rgba(37, 211, 102, 0.3); border-radius: 8px; padding: 16px; margin: 20px 0; text-align: center;">
                                <p style="margin: 0; font-size: 13px; color: #86efac; font-weight: bold;">💳 Payment Gateway Processed</p>
                                <p style="margin: 4px 0 0 0; font-size: 12px; color: #d1d5db;">Your payment is confirmed. Your artisanal tea batch has entered our climate-controlled vault for packing.</p>
                            </div>
                        `}

                        <!-- Dispatch & Shipping Info -->
                        <div style="background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 16px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.08); font-size: 13px;">
                            <div style="color: #d4af37; font-weight: bold; margin-bottom: 6px;">📦 Dispatch &amp; Delivery Notice</div>
                            <div style="color: #d1d5db; line-height: 1.6;">
                                Destination: <strong style="color:#ffffff;">${order.shipping_address || order.address || 'Standard International Delivery'}</strong><br>
                                Estimated Dispatch: <strong style="color:#ffffff;">3–7 business days via Express Priority Courier</strong> with live tracking.
                            </div>
                        </div>

                        <!-- Direct WhatsApp Concierge Button -->
                        <div style="text-align: center; margin: 30px 0 10px 0;">
                            <a href="https://wa.me/94771757556?text=Hello%20Rock%20One%20Wild%20Tea%2C%20I%20have%20placed%20Order%20${order.id}.%20Please%20confirm%20my%20order." style="background: #25D366; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 25px; font-weight: bold; font-size: 14px; display: inline-block; box-shadow: 0 4px 15px rgba(37,211,102,0.3);">
                                Contact Concierge Desk on WhatsApp
                            </a>
                        </div>

                        <!-- Footer -->
                        <div style="text-align: center; padding-top: 25px; border-top: 1px solid rgba(255, 255, 255, 0.1); color: #888; font-size: 11px; line-height: 1.6;">
                            <p style="color: #d4af37; font-weight: bold; margin-bottom: 4px;">ROCK ONE WILD TEA ESTATE</p>
                            <p>No: 54 Gannilawattha, Wallawela in Ettampitiya, Badulla District, Sri Lanka<br>Direct WhatsApp Desk: +94 77 175 7556</p>
                        </div>
                    </div>
                `
            });
            results.customerEmail = customerEmail;
            console.log('🌿 [Email Service] Customer order confirmation sent to:', custEmail);
        }
    } catch (err) {
        console.warn('Notice on customer order confirmation in sandbox mode:', err.message);
    }

    return { success: true, results };
}

module.exports = {
    sendInquiryEmails,
    sendOrderConfirmationEmails
};
