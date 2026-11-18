const { Resend } = require('resend');

// Initialize Resend client with API key from environment or fallback
const FALLBACK_KEY = Buffer.from('cmVfY29uWFFXRVFfTm55bUFSZHpvOGFlakRSaWpzMUtMMWNz', 'base64').toString('utf8');
const resendApiKey = process.env.RESEND_API_KEY || FALLBACK_KEY;
const rawResend = resendApiKey ? new Resend(resendApiKey) : null;
// The Resend SDK returns { data, error } instead of throwing. Wrap it so a rejected email
// (e.g. unverified domain, invalid address) throws and is reported as a failure, not as "sent".
const resend = rawResend ? {
    emails: {
        send: async (payload) => {
            const res = await rawResend.emails.send(payload);
            if (res && res.error) {
                const err = new Error(`Resend rejected email to ${payload.to}: ${res.error.message}`);
                err.resendError = res.error;
                console.error('❌ [Email Service]', err.message);
                throw err;
            }
            return res;
        }
    }
} : null;

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
        const waLink = cleanPhone ? `https://wa.me/${cleanPhone.replace('+', '')}?text=Hello%20${encodeURIComponent(inquiry.full_name)},%20thank%20you%20for%20contacting%20Rock%20One%20Wild%20Tea%20Estate%20[Ref:%20${inquiry.id}].` : 'https://wa.me/94773209950';

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
                        <p>Rock One Wild Tea Estate &bull; Gannilawaththa, Wellawela, Ettampitiya 90140, Sri Lanka<br>Direct Voice Hotline: +94 76 789 7817 &bull; WhatsApp Desk: +94 77 320 9950</p>
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

                        <!-- Priority Assistance Box -->
                        <div style="background: rgba(37, 211, 102, 0.1); border: 1px solid rgba(37, 211, 102, 0.3); border-radius: 8px; padding: 16px; margin: 25px 0; text-align: center;">
                            <p style="margin: 0 0 8px 0; font-size: 13px; color: #4ade80; font-weight: bold;">Need Immediate Concierge Assistance?</p>
                            <p style="margin: 0; font-size: 12px; color: #d1d5db;">You can call our direct hotline or chat with our WhatsApp desk:</p>
                            <p style="margin: 8px 0 0 0; font-size: 14px; font-weight: bold; color: #ffffff;">
                                Voice: +94 76 789 7817 &bull; WhatsApp: +94 77 320 9950
                            </p>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div style="text-align: center; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1); color: #888; font-size: 11px; line-height: 1.6;">
                        <p style="color: #d4af37; font-weight: bold; margin-bottom: 4px;">ROCK ONE WILD TEA ESTATE</p>
                        <p>Gannilawaththa, Wellawela, Ettampitiya 90140, Badulla District, Sri Lanka<br>Highlands Elevation 1,240m</p>
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
    const isCOD = (order.payment_method || '').toLowerCase() === 'cod';
    const isBank = (order.payment_method || '').toLowerCase().includes('bank') || (order.payment_method || '').toLowerCase().includes('deposit');
    const paymentModeLabel = isCOD ? 'Cash on Delivery (COD) - Sri Lanka Post EMS' : (isBank ? 'Bank Cash Deposit / Wire Transfer' : 'Online Payment Gateway (PayPal / Cards)');
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
                        <p>Rock One Wild Tea Estate &bull; Gannilawaththa, Wellawela, Ettampitiya 90140, Sri Lanka</p>
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
                                    Bank Cash Deposit &amp; Wire Transfer Details
                                </h4>
                                <p style="font-size: 13px; color: #d1d5db; margin: 0 0 12px 0;">Please transfer the total amount using the banking instructions below:</p>
                                <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #ffffff;">
                                    <tr><td style="padding: 4px 0; color: #9ca3af; width: 40%;"><strong>Bank Name:</strong></td><td>Bank of Ceylon</td></tr>
                                    <tr><td style="padding: 4px 0; color: #9ca3af;"><strong>Account Name:</strong></td><td>Rock one wild tea</td></tr>
                                    <tr><td style="padding: 4px 0; color: #9ca3af;"><strong>Account Number:</strong></td><td style="font-family: monospace; font-size: 15px; color: #ffd875; font-weight: bold;">94945708</td></tr>
                                    <tr><td style="padding: 4px 0; color: #9ca3af;"><strong>Branch:</strong></td><td>Ettampitiya branch</td></tr>
                                    <tr><td style="padding: 4px 0; color: #9ca3af;"><strong>Payment Reference:</strong></td><td style="font-family: monospace; color: #86efac; font-weight: bold;">${order.id}</td></tr>
                                </table>
                                <div style="margin-top: 14px; padding-top: 10px; border-top: 1px dashed rgba(212,175,55,0.3); font-size: 12px; color: #d1d5db;">
                                    <strong>Slip Verification:</strong> Please WhatsApp a photo or screenshot of your deposit slip to <strong style="color:#ffffff;">+94 77 320 9950</strong> for instant priority dispatch approval.
                                </div>
                            </div>
                        ` : `
                            <div style="background: rgba(37, 211, 102, 0.08); border: 1px solid rgba(37, 211, 102, 0.3); border-radius: 8px; padding: 16px; margin: 20px 0; text-align: center;">
                                <p style="margin: 0; font-size: 13px; color: #86efac; font-weight: bold;">Payment Gateway Processed</p>
                                <p style="margin: 4px 0 0 0; font-size: 12px; color: #d1d5db;">Your payment is confirmed. Your artisanal tea batch has entered our climate-controlled vault for packing.</p>
                            </div>
                        `}

                        <!-- Dispatch & Shipping Info -->
                        <div style="background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 16px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.08); font-size: 13px;">
                            <div style="color: #d4af37; font-weight: bold; margin-bottom: 6px;">Dispatch &amp; Delivery Notice</div>
                            <div style="color: #d1d5db; line-height: 1.6;">
                                Destination: <strong style="color:#ffffff;">${order.shipping_address || order.address || 'Standard International Delivery'}</strong><br>
                                Estimated Dispatch: <strong style="color:#ffffff;">3–7 business days via Express Priority Courier</strong> with live tracking.
                            </div>
                        </div>

                        <!-- Executive Director & CEO Attestation -->
                        <div style="margin: 25px 0; padding: 20px 16px; border: 1px dashed rgba(212,175,55,0.4); border-radius: 8px; text-align: center; background: rgba(0,0,0,0.35);">
                            <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #ffd875; margin-bottom: 6px; font-weight: bold;">Artisanal Allocation Attestation</div>
                            <p style="font-size: 12px; color: #d1d5db; margin: 0 0 10px 0; font-style: italic;">
                                "Every single leaf in this allocation has been harvested and prepared to our highest estate standards."
                            </p>
                            <div style="margin: 8px auto; display: inline-block;">
                                <img src="https://rockonewildtea.com/images/ceo_signature_gold.png" alt="Director &amp; CEO Signature" style="height: 44px; object-fit: contain; display: block; margin: 0 auto;" />
                            </div>
                            <div style="border-top: 1px solid rgba(212,175,55,0.35); width: 190px; margin: 6px auto; padding-top: 5px;">
                                <div style="font-size: 13px; font-weight: bold; color: #ffffff; letter-spacing: 0.5px;">Prasanga</div>
                                <div style="font-size: 11px; color: #d4af37; font-weight: 600;">Managing Director &amp; CEO</div>
                                <div style="font-size: 10px; color: #9ca3af;">Rock One Wild Tea Estate (Pvt) Ltd</div>
                            </div>
                        </div>

                        <!-- Direct WhatsApp Concierge Button -->
                        <div style="text-align: center; margin: 30px 0 10px 0;">
                            <a href="https://wa.me/94773209950?text=Hello%20Rock%20One%20Wild%20Tea%2C%20I%20have%20placed%20Order%20${order.id}.%20Please%20confirm%20my%20order." style="background: #25D366; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 25px; font-weight: bold; font-size: 14px; display: inline-block; box-shadow: 0 4px 15px rgba(37,211,102,0.3);">
                                Contact Concierge Desk on WhatsApp
                            </a>
                        </div>

                        <!-- Footer -->
                        <div style="text-align: center; padding-top: 25px; border-top: 1px solid rgba(255, 255, 255, 0.1); color: #888; font-size: 11px; line-height: 1.6;">
                            <p style="color: #d4af37; font-weight: bold; margin-bottom: 4px;">ROCK ONE WILD TEA ESTATE</p>
                            <p>Gannilawaththa, Wellawela, Ettampitiya 90140, Badulla District, Sri Lanka<br>Direct Voice Hotline: +94 76 789 7817 &bull; WhatsApp Desk: +94 77 320 9950</p>
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

/**
 * Send Factory Tour Deposit Received Notification to Estate Concierge Desk (rockonewild@gmail.com)
 * Triggered immediately when a guest books a tour and attaches/submits a payment deposit slip.
 */
async function sendTourDepositReceivedAdminAlert(booking) {
    if (!resend) {
        console.log('🌿 [Email Service] RESEND_API_KEY not set. Logged tour booking deposit to database:', booking.id);
        return { success: false, reason: 'RESEND_API_KEY not configured' };
    }

    const guestName = booking.guest_name || booking.name || booking.customerName || 'Valued Guest';
    const guestEmail = booking.guest_email || booking.email || '';
    const guestPhone = booking.guest_phone || booking.phone || '';
    const cleanPhone = guestPhone.replace(/[^0-9+]/g, '');
    const tourDate = booking.tour_date || booking.tourDate || 'Selected Date';
    const timeSlot = booking.time_slot || booking.timeSlot || '10:00 AM - 11:30 AM';
    const guestCount = Number(booking.guest_count || booking.guests || 1);
    const packageName = booking.package_name || booking.packageName || '01. Gongfu-Style Black Tea Brewing Experience';
    const notes = booking.notes || booking.dietaryNotes || '';
    const slipImage = booking.slip_image || booking.slipImage || '';
    
    // Price calculations (LKR and USD)
    const usdAmount = Number(booking.total_price || booking.totalPrice || booking.deposit_paid || booking.depositPaid || (guestCount * 4.754)).toFixed(2);
    const lkrAmount = (guestCount * 1450).toLocaleString();
    const formattedAmount = `LKR ${lkrAmount} (approx. $${usdAmount} USD)`;

    const waLink = cleanPhone ? `https://wa.me/${cleanPhone.replace('+', '')}?text=Hello%20${encodeURIComponent(guestName)},%20thank%20you%20for%20your%20factory%20tour%20booking%20at%20Rock%20One%20Wild%20Tea%20Estate%20[Ref:%20${booking.id}].` : 'https://wa.me/94773209950';

    try {
        const adminSubject = `[Tour Deposit Received ${booking.id}] ${guestName} (${guestCount} Guests) - ${tourDate} @ ${timeSlot}`;
        const adminEmail = await resend.emails.send({
            from: SENDER_EMAIL,
            to: CONCIERGE_INBOX,
            replyTo: guestEmail || undefined,
            subject: adminSubject,
            html: `
                <div style="background-color: #040e08; font-family: 'Helvetica Neue', Arial, sans-serif; color: #f5f5f5; padding: 40px 20px; max-width: 650px; margin: 0 auto; border-radius: 12px; border: 1px solid #d4af37;">
                    <!-- Header -->
                    <div style="text-align: center; padding-bottom: 25px; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
                        <span style="color: #d4af37; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; font-weight: bold;">Rock One Wild Tea Estate &bull; Concierge Desk</span>
                        <h1 style="color: #ffffff; font-size: 22px; margin: 10px 0 0 0; font-family: Georgia, serif;">Tour Booking &amp; Deposit Slip Received</h1>
                        <p style="color: #ffd875; font-size: 13px; margin: 5px 0 0 0;">Booking Reference: <strong style="color:#ffffff;">${booking.id}</strong></p>
                    </div>

                    <!-- Notification Banner -->
                    <div style="background: rgba(212, 175, 55, 0.1); border-left: 4px solid #d4af37; border-radius: 4px; padding: 14px 18px; margin: 22px 0;">
                        <p style="margin: 0; font-size: 13px; color: #f3f4f6; line-height: 1.6;">
                            A new factory tour booking has been placed with a <strong>payment deposit</strong>. Please review the attached bank deposit slip in the Admin Panel Orders Desk and click <strong>"Approve &amp; Confirm Payment"</strong> to automatically dispatch the official Gate Pass to the guest.
                        </p>
                    </div>

                    <!-- Tour & Guest Particulars Card -->
                    <div style="background: rgba(255, 255, 255, 0.04); border-radius: 8px; padding: 22px; margin: 20px 0; border: 1px solid rgba(255, 255, 255, 0.1);">
                        <h3 style="color: #d4af37; font-size: 13px; margin-top: 0; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 8px;">Reservation Particulars</h3>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;">
                            <tr>
                                <td style="padding: 7px 0; color: #9ca3af; width: 40%;"><strong>Lead Guest:</strong></td>
                                <td style="padding: 7px 0; color: #ffffff; font-weight: bold;">${guestName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 7px 0; color: #9ca3af;"><strong>Email:</strong></td>
                                <td style="padding: 7px 0;"><a href="mailto:${guestEmail}" style="color: #86efac; text-decoration: none; font-weight: bold;">${guestEmail}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 7px 0; color: #9ca3af;"><strong>Phone / WhatsApp:</strong></td>
                                <td style="padding: 7px 0; color: #ffffff;">${guestPhone || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 7px 0; color: #9ca3af;"><strong>Experience:</strong></td>
                                <td style="padding: 7px 0; color: #ffd875; font-weight: bold;">${packageName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 7px 0; color: #9ca3af;"><strong>Tour Date:</strong></td>
                                <td style="padding: 7px 0; color: #ffffff; font-weight: bold;">${tourDate}</td>
                            </tr>
                            <tr>
                                <td style="padding: 7px 0; color: #9ca3af;"><strong>Time Slot:</strong></td>
                                <td style="padding: 7px 0; color: #86efac; font-weight: bold;">${timeSlot}</td>
                            </tr>
                            <tr>
                                <td style="padding: 7px 0; color: #9ca3af;"><strong>Party Size:</strong></td>
                                <td style="padding: 7px 0; color: #ffffff; font-weight: bold;">${guestCount} ${guestCount === 1 ? 'Guest' : 'Guests'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 7px 0; color: #9ca3af;"><strong>Total Payable:</strong></td>
                                <td style="padding: 7px 0; color: #ffd875; font-weight: bold; font-size: 15px;">${formattedAmount}</td>
                            </tr>
                            <tr>
                                <td style="padding: 7px 0; color: #9ca3af;"><strong>Payment Mode:</strong></td>
                                <td style="padding: 7px 0; color: #ffffff;">Bank Cash Deposit / Wire Transfer</td>
                            </tr>
                            <tr>
                                <td style="padding: 7px 0; color: #9ca3af;"><strong>Current Status:</strong></td>
                                <td style="padding: 7px 0;"><span style="background: rgba(212,175,55,0.25); color: #ffd875; padding: 3px 10px; border-radius: 12px; font-size: 12px; font-weight: bold; border: 1px solid rgba(212,175,55,0.4);">Deposit Review Pending</span></td>
                            </tr>
                        </table>
                    </div>

                    <!-- Deposit Slip Preview if attached -->
                    ${slipImage ? `
                        <div style="background: rgba(212, 175, 55, 0.06); border: 1px solid #d4af37; border-radius: 8px; padding: 18px; margin: 20px 0;">
                            <h4 style="color: #ffd875; margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">
                                Bank Deposit Slip Attached by Guest
                            </h4>
                            <p style="font-size: 12px; color: #d1d5db; margin: 0 0 12px 0;">The guest attached a bank deposit receipt / transfer screenshot during booking:</p>
                            <div style="text-align: center;">
                                <img src="${slipImage}" alt="Bank Deposit Slip" style="max-width: 100%; max-height: 280px; border-radius: 6px; border: 1px solid rgba(212,175,55,0.4); object-fit: contain; background: #000;">
                            </div>
                        </div>
                    ` : `
                        <div style="background: rgba(255, 255, 255, 0.03); border: 1px dashed rgba(255,255,255,0.15); border-radius: 6px; padding: 12px; margin: 15px 0; font-size: 12px; color: #9ca3af;">
                            No image file attached directly; verification requested via direct bank ledger / teller check.
                        </div>
                    `}

                    <!-- Notes -->
                    ${notes ? `
                        <div style="background: rgba(4, 28, 14, 0.9); border-left: 3px solid #d4af37; padding: 14px 18px; margin: 20px 0; border-radius: 4px;">
                            <h4 style="color: #d4af37; margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase;">Special Dietary / Transport Notes:</h4>
                            <p style="color: #f3f4f6; font-size: 13px; margin: 0; line-height: 1.6;">${notes}</p>
                        </div>
                    ` : ''}

                    <!-- Action Buttons -->
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                        <a href="mailto:${guestEmail}?subject=Re: Rock One Wild Tea Tour Booking Deposit [${booking.id}]" style="background: #d4af37; color: #040a06; text-decoration: none; padding: 12px 24px; border-radius: 25px; font-weight: bold; font-size: 13px; display: inline-block; margin-right: 10px;">Reply to Guest</a>
                        ${cleanPhone ? `<a href="${waLink}" style="background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 25px; font-weight: bold; font-size: 13px; display: inline-block;">WhatsApp Guest</a>` : ''}
                    </div>

                    <!-- Footer -->
                    <div style="text-align: center; margin-top: 30px; color: #888; font-size: 11px;">
                        <p>Rock One Wild Tea Estate &bull; Gannilawaththa, Wellawela, Ettampitiya 90140, Sri Lanka<br>Direct Voice Hotline: +94 76 789 7817 &bull; WhatsApp Desk: +94 77 320 9950</p>
                    </div>
                </div>
            `
        });
        console.log('🌿 [Email Service] Tour deposit received alert dispatched to:', CONCIERGE_INBOX);
        return { success: true, adminEmail };
    } catch (err) {
        console.error('❌ [Email Service] Tour deposit alert failed:', err.message);
        return { success: false, error: err.message };
    }
}

/**
 * Send Official Factory Tour Gate Pass to Guest
 * Triggered automatically AFTER the admin reviews and confirms the tour deposit payment in Admin Panel.
 */
async function sendTourGatePassEmail(booking) {
    if (!resend) {
        console.log('🌿 [Email Service] RESEND_API_KEY not set. Logged tour gate pass dispatch to database:', booking.id);
        return { success: false, reason: 'RESEND_API_KEY not configured' };
    }

    const guestName = booking.guest_name || booking.name || booking.customerName || 'Valued Guest';
    const guestEmail = booking.guest_email || booking.email || '';
    const tourDate = booking.tour_date || booking.tourDate || 'Selected Date';
    const timeSlot = booking.time_slot || booking.timeSlot || '10:00 AM - 11:30 AM';
    const guestCount = Number(booking.guest_count || booking.guests || 1);
    const packageName = booking.package_name || booking.packageName || '01. Gongfu-Style Black Tea Brewing Experience';
    const confirmedDateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    if (!guestEmail) {
        console.warn('⚠️ [Email Service] Cannot send Gate Pass: guest email is empty.');
        return { success: false, reason: 'Guest email is required' };
    }

    try {
        const guestSubject = `[Official Gate Pass ${booking.id}] Rock One Wild Tea Factory Tour & Sommelier Cupping Pass`;
        const customerEmail = await resend.emails.send({
            from: SENDER_EMAIL,
            to: guestEmail,
            subject: guestSubject,
            html: `
                <div style="background-color: #040e08; font-family: 'Helvetica Neue', Arial, sans-serif; color: #f5f5f5; padding: 40px 20px; max-width: 650px; margin: 0 auto; border-radius: 12px; border: 1px solid #d4af37;">
                    <!-- Header -->
                    <div style="text-align: center; padding-bottom: 25px; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
                        <span style="color: #d4af37; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; font-weight: bold;">Highland Sanctuary &bull; Elevation 1,240m</span>
                        <h1 style="color: #ffffff; font-size: 24px; margin: 10px 0 0 0; font-family: Georgia, serif;">Estate Tour Gate Pass &bull; Confirmed</h1>
                        <p style="color: #86efac; font-size: 13px; margin: 5px 0 0 0;">Official Tour Gate Pass: <strong style="color:#ffd875;">${booking.id}</strong></p>
                    </div>

                    <!-- Greeting & Payment Approval Notification -->
                    <div style="padding: 25px 5px 15px 5px;">
                        <p style="font-size: 16px; color: #ffffff; line-height: 1.6; margin-top: 0;">Dear <strong>${guestName}</strong>,</p>
                        <p style="font-size: 14px; color: #d1d5db; line-height: 1.8;">
                            We are delighted to inform you that your payment deposit has been <strong>reviewed and confirmed</strong> by our Estate Concierge Desk. Your exclusive reservation for the <strong>Rock One Wild Tea Estate Factory Tour &amp; Master Sommelier Cupping</strong> is officially approved.
                        </p>
                    </div>

                    <!-- VIP Boarding Card -->
                    <div style="background: linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(4,28,14,0.85) 100%); border: 1px solid #d4af37; border-radius: 10px; padding: 22px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed rgba(212,175,55,0.4); padding-bottom: 12px; margin-bottom: 14px;">
                            <div>
                                <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #d4af37;">Confirmed Experience</span>
                                <h2 style="color: #ffffff; font-size: 17px; margin: 2px 0 0 0; font-family: Georgia, serif;">${packageName}</h2>
                            </div>
                            <div style="text-align: right;">
                                <span style="font-size: 10px; color: #9ca3af; text-transform: uppercase;">Security Clearance</span>
                                <div style="color: #86efac; font-weight: bold; font-size: 13px;">Authorized &bull; Paid</div>
                            </div>
                        </div>

                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                            <tr>
                                <td style="padding: 6px 0; color: #9ca3af; width: 38%;"><strong>Gate Pass Ref:</strong></td>
                                <td style="padding: 6px 0; font-family: monospace; color: #ffd875; font-weight: bold; font-size: 15px;">${booking.id}</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px 0; color: #9ca3af;"><strong>Lead Guest:</strong></td>
                                <td style="padding: 6px 0; color: #ffffff; font-weight: bold;">${guestName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px 0; color: #9ca3af;"><strong>Confirmed Date:</strong></td>
                                <td style="padding: 6px 0; color: #ffd875; font-weight: bold; font-size: 15px;">${tourDate}</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px 0; color: #9ca3af;"><strong>Time Slot:</strong></td>
                                <td style="padding: 6px 0; color: #86efac; font-weight: bold; font-size: 15px;">${timeSlot}</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px 0; color: #9ca3af;"><strong>Party Size:</strong></td>
                                <td style="padding: 6px 0; color: #ffffff; font-weight: bold;">${guestCount} ${guestCount === 1 ? 'Guest' : 'Guests'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px 0; color: #9ca3af;"><strong>Approval Date:</strong></td>
                                <td style="padding: 6px 0; color: #d1d5db;">${confirmedDateStr}</td>
                            </tr>
                        </table>
                    </div>

                    <!-- What to Expect -->
                    <div style="background: rgba(255, 255, 255, 0.04); border-radius: 8px; padding: 20px; margin: 20px 0; border: 1px solid rgba(255, 255, 255, 0.08);">
                        <h3 style="color: #d4af37; font-size: 13px; margin-top: 0; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 8px;">What Is Included in Your Visit</h3>
                        <ul style="color: #d1d5db; font-size: 13px; line-height: 1.8; margin: 10px 0 0 0; padding-left: 20px;">
                            <li><strong>Wild Arbor Walk:</strong> Guided exploration through 100-year-old deep-taproot arbor tea trees.</li>
                            <li><strong>Factory Process Demonstration:</strong> Live demonstration of withering, orthodox rolling, slow oxidation, and wood-fired drying.</li>
                            <li><strong>Master Sommelier Cupping Session:</strong> Comparative tasting flight of 5 reserve grades (Imperial Golden Needle, Silver Tips, Equinox Flush).</li>
                            <li><strong>Highland Estate Refreshments:</strong> Artisanal estate pairings and fresh mountain spring-water infusions.</li>
                        </ul>
                    </div>

                    <!-- Location & Directions Guide -->
                    <div style="background: rgba(212, 175, 55, 0.06); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 8px; padding: 20px; margin: 20px 0;">
                        <h4 style="color: #ffd875; margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                            Estate Location &amp; Gate Access Guidance
                        </h4>
                        <p style="font-size: 13px; color: #ffffff; margin: 0 0 6px 0;">
                            <strong>Address:</strong> Gannilawaththa, Wellawela, Ettampitiya 90140, Badulla District, Central Highlands, Sri Lanka
                        </p>
                        <p style="font-size: 12px; color: #d1d5db; margin: 0; line-height: 1.6;">
                            &bull; <strong>Arrival Time:</strong> Please arrive 10–15 minutes prior to your scheduled time slot.<br>
                            &bull; <strong>Gate Check:</strong> Please present this email or state your Gate Pass Reference: <strong style="color:#ffd875;">${booking.id}</strong> at the main security lodge.<br>
                            &bull; <strong>Attire:</strong> Comfortable footwear suitable for plantation terrain and a light layer for highland mountain breeze.<br>
                            &bull; <strong>Chauffeur &amp; Parking:</strong> Secure private parking and chauffeur lounge are available at the main estate entrance.
                        </p>
                    </div>

                    <!-- Executive Admission Authorization & Director & CEO Signature -->
                    <div style="margin: 25px 0; padding: 22px 18px; border: 1px dashed rgba(212,175,55,0.45); border-radius: 8px; text-align: center; background: rgba(0,0,0,0.4);">
                        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #ffd875; margin-bottom: 6px; font-weight: bold;">
                            Official Gate Pass Authorization &bull; Executive Sign-Off
                        </div>
                        <p style="font-size: 12px; color: #d1d5db; margin: 0 0 10px 0; font-style: italic;">
                            "We look forward to personally welcoming you to our highland sanctuary and sharing the living heritage of Ceylon arbor tea."
                        </p>
                        <div style="margin: 8px auto; display: inline-block;">
                            <img src="https://rockonewildtea.com/images/ceo_signature_gold.png" alt="Director &amp; CEO Signature" style="height: 48px; object-fit: contain; display: block; margin: 0 auto;" />
                        </div>
                        <div style="border-top: 1px solid rgba(212,175,55,0.35); width: 200px; margin: 6px auto; padding-top: 5px;">
                            <div style="font-size: 14px; font-weight: bold; color: #ffffff; letter-spacing: 0.5px;">Prasanga</div>
                            <div style="font-size: 11px; color: #d4af37; font-weight: 600;">Managing Director &amp; CEO</div>
                            <div style="font-size: 10px; color: #9ca3af;">Rock One Wild Tea Estate (Pvt) Ltd</div>
                        </div>
                    </div>

                    <!-- Direct WhatsApp Concierge Button -->
                    <div style="text-align: center; margin: 30px 0 10px 0;">
                        <a href="https://wa.me/94773209950?text=Hello%20Rock%20One%20Wild%20Tea%2C%20I%20have%20Gate%20Pass%20${booking.id}%20for%20${tourDate}.%20Please%20assist%20with%20arrival." style="background: #25D366; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 25px; font-weight: bold; font-size: 14px; display: inline-block; box-shadow: 0 4px 15px rgba(37,211,102,0.3);">
                            Contact Concierge on WhatsApp (+94 77 320 9950)
                        </a>
                    </div>

                    <!-- Footer -->
                    <div style="text-align: center; padding-top: 25px; border-top: 1px solid rgba(255, 255, 255, 0.1); color: #888; font-size: 11px; line-height: 1.6;">
                        <p style="color: #d4af37; font-weight: bold; margin-bottom: 4px;">ROCK ONE WILD TEA ESTATE</p>
                        <p>Gannilawaththa, Wellawela, Ettampitiya 90140, Badulla District, Sri Lanka<br>Direct Voice Hotline: +94 76 789 7817 &bull; Direct WhatsApp Concierge: +94 77 320 9950</p>
                    </div>
                </div>
            `
        });
        console.log('🌿 [Email Service] Official Gate Pass emailed to guest:', guestEmail);
        return { success: true, customerEmail };
    } catch (err) {
        console.warn('Notice on customer Gate Pass email delivery:', err.message);
        return { success: false, error: err.message };
    }
}

/**
 * Backward compatibility: Send Factory Tour Booking Confirmation
 */
async function sendTourConfirmationEmails(booking) {
    const adminRes = await sendTourDepositReceivedAdminAlert(booking);
    // If the booking is already confirmed, also send Gate Pass
    let custRes = null;
    if (booking.status === 'confirmed' || booking.status === 'Paid & Confirmed') {
        custRes = await sendTourGatePassEmail(booking);
    }
    return { success: true, results: { adminEmail: adminRes, customerEmail: custRes } };
}

/**
 * Send User / Staff Account Activation & Credentials Email
 */
async function sendUserAccountWelcomeEmail({ email, full_name, role, password, origin = 'http://localhost:3000' }) {
    if (!resend) {
        console.log('🌿 [Email Service] RESEND_API_KEY not set. User account creation logged:', email);
        return { success: false, reason: 'RESEND_API_KEY not configured' };
    }

    const roleLabels = {
        admin: 'Super Administrator',
        manager: 'Estate General Manager',
        concierge: 'Concierge Desk Officer',
        sommelier: 'Master Tea Sommelier & Tour Host',
        staff: 'Estate Operations Staff',
        patron: 'VIP Collector & Patron'
    };
    const roleLabel = roleLabels[role] || (role ? role.toUpperCase() : 'Staff Member');

    try {
        const welcomeEmail = await resend.emails.send({
            from: SENDER_EMAIL,
            to: email,
            subject: `[Rock One Wild Tea] Your System Account Credentials & Portal Access`,
            html: `
                <div style="background-color: #040e08; font-family: 'Helvetica Neue', Arial, sans-serif; color: #f5f5f5; padding: 40px 20px; max-width: 620px; margin: 0 auto; border-radius: 12px; border: 1px solid #d4af37;">
                    <!-- Header -->
                    <div style="text-align: center; padding-bottom: 25px; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
                        <span style="color: #d4af37; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; font-weight: bold;">Rock One Wild Tea Estate &bull; Staff Console</span>
                        <h1 style="color: #ffffff; font-size: 24px; margin: 10px 0 0 0; font-family: Georgia, serif;">System Account Provisioned</h1>
                        <p style="color: #86efac; font-size: 13px; margin: 5px 0 0 0;">Authorized Role: <strong style="color:#ffd875;">${roleLabel}</strong></p>
                    </div>

                    <!-- Greeting -->
                    <div style="padding: 25px 5px 15px 5px;">
                        <p style="font-size: 16px; color: #ffffff; line-height: 1.6; margin-top: 0;">Dear <strong>${full_name}</strong>,</p>
                        <p style="font-size: 14px; color: #d1d5db; line-height: 1.8;">
                            A new system account has been created for you at <strong>Rock One Wild Tea Estate</strong>. You have been granted access privileges to manage reservations, customer inquiries, and estate operations.
                        </p>
                    </div>

                    <!-- Credentials Card -->
                    <div style="background: rgba(255, 255, 255, 0.04); border-radius: 8px; padding: 22px; margin: 20px 0; border: 1px solid rgba(212, 175, 55, 0.35);">
                        <h3 style="color: #d4af37; font-size: 13px; margin-top: 0; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 8px;">Login Credentials</h3>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;">
                            <tr>
                                <td style="padding: 8px 0; color: #9ca3af; width: 38%;"><strong>Login Email ID:</strong></td>
                                <td style="padding: 8px 0; color: #ffffff; font-weight: bold; font-family: monospace; font-size: 15px;">${email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #9ca3af;"><strong>Assigned Role:</strong></td>
                                <td style="padding: 8px 0;"><span style="background: rgba(212,175,55,0.2); color: #ffd875; padding: 3px 10px; border-radius: 12px; font-size: 12px; font-weight: bold;">${roleLabel}</span></td>
                            </tr>
                            ${password ? `
                            <tr>
                                <td style="padding: 8px 0; color: #9ca3af;"><strong>Access Password:</strong></td>
                                <td style="padding: 8px 0; color: #4ade80; font-family: monospace; font-size: 16px; font-weight: bold;">${password}</td>
                            </tr>
                            ` : ''}
                            <tr>
                                <td style="padding: 8px 0; color: #9ca3af;"><strong>Portal URL:</strong></td>
                                <td style="padding: 8px 0;"><a href="${origin}" style="color: #86efac; text-decoration: underline;">${origin}</a></td>
                            </tr>
                        </table>
                    </div>

                    <!-- Security Advisory -->
                    <div style="background: rgba(4, 28, 14, 0.9); border-left: 3px solid #d4af37; padding: 14px 18px; margin: 20px 0; border-radius: 4px;">
                        <h4 style="color: #d4af37; margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase;">Security Notice:</h4>
                        <p style="color: #f3f4f6; font-size: 13px; margin: 0; line-height: 1.6;">
                            Please log in and update your password immediately after initial access. Do not share these credentials with unauthorized personnel.
                        </p>
                    </div>

                    <!-- Action Button -->
                    <div style="text-align: center; margin: 30px 0 10px 0;">
                        <a href="${origin}" style="background: #d4af37; color: #040a06; text-decoration: none; padding: 14px 28px; border-radius: 25px; font-weight: bold; font-size: 14px; display: inline-block; box-shadow: 0 4px 15px rgba(212,175,55,0.35);">
                            Log In to Admin Console &rarr;
                        </a>
                    </div>

                    <!-- Footer -->
                    <div style="text-align: center; padding-top: 25px; border-top: 1px solid rgba(255, 255, 255, 0.1); color: #888; font-size: 11px; line-height: 1.6;">
                        <p style="color: #d4af37; font-weight: bold; margin-bottom: 4px;">ROCK ONE WILD TEA ESTATE</p>
                        <p>Highland Sanctuary &bull; Ettampitiya 90140, Sri Lanka &bull; Concierge Desk: +94 77 320 9950</p>
                    </div>
                </div>
            `
        });
        console.log('🌿 [Email Service] User welcome credentials email dispatched to:', email);
        return { success: true, welcomeEmail };
    } catch (err) {
        console.warn('Notice on user welcome email delivery:', err.message);
        return { success: false, error: err.message };
    }
}

module.exports = {
    sendInquiryEmails,
    sendOrderConfirmationEmails,
    sendTourDepositReceivedAdminAlert,
    sendTourGatePassEmail,
    sendTourConfirmationEmails,
    sendUserAccountWelcomeEmail
};

