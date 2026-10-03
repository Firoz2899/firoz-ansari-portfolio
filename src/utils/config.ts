export const config = {
    emailPublicKey: String(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY),
    emailPrivateKey: String(import.meta.env.VITE_EMAIL_JS_PRIVATE_KEY),
    emailServiceId: String(import.meta.env.VITE_EMAIL_JS_SERVICE_ID),
    emailTemplateId: String(import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID),
    
    captchaSiteKey: String(import.meta.env.VITE_CAPTCHA_SITE_KEY),
    captchaSecretKey: String(import.meta.env.VITE_CAPTCHA_SECRET_KEY),
} as const