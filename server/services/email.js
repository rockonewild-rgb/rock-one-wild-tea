const { Resend } = require('resend');

// Initialize Resend client with API key from environment
const resendApiKey = process.env.RESEND_API_KEY;
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

module.exports = {
    sendInquiryEmails
};
