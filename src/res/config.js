
export const MessageService = {
    type: process.env.REACT_APP_EMAILJS_TYPE,
    template: process.env.REACT_APP_EMAILJS_TEMPLATE,
    user_id: process.env.REACT_APP_EMAILJS_ID
}

export const ReCaptcha = {
    site_key: process.env.REACT_APP_CAPTCHA_SECRET_KEY
}