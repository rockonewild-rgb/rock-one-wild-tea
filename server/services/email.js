const { Resend } = require('resend');

// Initialize Resend client with API key from environment
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const SENDER_EMAIL = process.env.RESEND_FROM_EMAIL || 'Rock One Wild Tea <onboarding@resend.dev>';
const CONCIERGE_INBOX = process.env.CONCIERGE_EMAIL || 'axentrat@gmail.com';

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
        const adminEmail = await resend.emails.send({
            from: SENDER_EMAIL,
            to: CONCIERGE_INBOX,
            replyTo: inquiry.email,
            subject: `[New Inquiry ${inquiry.id}] ${inquiry.full_name} - ${inquiry.service_interested || 'Estate Concierge'}`,
            html: `
                <div style="background-color: #040e08; font-family: 'Helvetica Neue', Arial, sans-serif; color: #f5f5f5; padding: 40px 20px; max-width: 650px; margin: 0 auto; border-radius: 12px; border: 1px solid #d4af37;">
                    <!-- Header -->
                    <div style="text-align: center; padding-bottom: 25px; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
                        <span style="color: #d4af37; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; font-weight: bold;">Rock One Wild Tea Estate</span>
                        <h1 style="color: #ffffff; font-size: 22px; margin: 10px 0 0 0; font-family: Georgia, serif;">New Tea Concierge Inquiry</h1>
                        <p style="color: #86efac; font-size: 13px; margin: 5px 0 0 0;">Dossier Reference: <strong>${inquiry.id}</strong></p>
                    </div>

                    <!-- Customer Details Card -->
                    <div style="background: rgba(255, 255, 255, 0.04); border-radius: 8px; padding: 20px; margin: 25px 0; border: 1px solid rgba(255, 255, 255, 0.1);">
                        <h3 style="color: #d4af37; font-size: 14px; margin-top: 0; text-transform: uppercase; letter-spacing: 1px;">Patron Information</h3>
                        <p style="margin: 6px 0; font-size: 14px;"><strong>Full Name:</strong> ${inquiry.full_name}</p>
                        <p style="margin: 6px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${inquiry.email}" style="color: #86efac; text-decoration: none;">${inquiry.email}</a></p>
                        <p style="margin: 6px 0; font-size: 14px;"><strong>Phone:</strong> ${inquiry.phone || 'Not provided'}</p>
                        <p style="margin: 6px 0; font-size: 14px;"><strong>Service of Interest:</strong> <span style="color: #ffd875;">${inquiry.service_interested || 'General Inquiry'}</span></p>
                        <p style="margin: 6px 0; font-size: 14px;"><strong>Budget Range:</strong> ${inquiry.budget_range || 'Not specified'}</p>
                    </div>

                    <!-- Message Body -->
                    <div style="background: rgba(4, 28, 14, 0.85); border-left: 3px solid #d4af37; padding: 18px; margin: 20px 0; border-radius: 4px;">
                        <h4 style="color: #d4af37; margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase;">Message & Project Details</h4>
                        <p style="color: #e5e5e5; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${inquiry.message}</p>
                    </div>

                    <!-- Actions -->
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                        <a href="mailto:${inquiry.email}?subject=Re: Rock One Wild Tea Inquiry [${inquiry.id}]" style="background: #d4af37; color: #040a06; text-decoration: none; padding: 12px 26px; border-radius: 25px; font-weight: bold; font-size: 14px; display: inline-block; box-shadow: 0 4px 15px rgba(212,175,55,0.4);">Reply to Patron</a>
                    </div>

                    <!-- Footer -->
                    <div style="text-align: center; margin-top: 30px; color: #888; font-size: 11px; line-height: 1.5;">
                        <p>No: 54 Gannilawattha, Wallawela, Ettampitiya, Badulla District, Sri Lanka<br>Direct WhatsApp: +94 77 175 7556</p>
                    </div>
                </div>
            `
        });
        results.adminEmail = adminEmail;
        console.log('🌿 [Email Service] Concierge notification email sent to:', CONCIERGE_INBOX);
    } catch (err) {
        console.error('❌ [Email Service] Admin notification failed:', err.message);
    }

    // 2. Automated Luxury Confirmation Email to Customer
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
        console.error('❌ [Email Service] Customer confirmation failed:', err.message);
    }

    return { success: true, results };
}

module.exports = {
    sendInquiryEmails
};
