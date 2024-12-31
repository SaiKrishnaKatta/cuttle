export const Constants: any = {
    REGISTER_SMS_OTP: 'SMS_REGISTER_VERIFICATION_CODE',
    LOGIN_SMS_OTP: 'SMS_LOGIN_VERIFICATION_CODE',
    SMS_PASSWORD_VERIFICATION_CODE: 'SMS_PASSWORD_VERIFICATION_CODE',
    COUNTRY_CODE: 'IN'
}

export const CompanyConstants: any = {
    PHONE: '+(852) 8170 044',
    EMAIL: 'contact@cuttlecard.com'
}

export const PATTERNS: any = {
    FIRST_NAME_REGEX: /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$/,
    LAST_NAME_REGEX: /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$/,
    COUNTRY_CODE_REGEX: /^[A-Z]{3}$/,
    USERNAME_REGEX: /^(?=.{5,16}$)[a-zA-Z0-9]+([_]?[a-zA-Z0-9]+)*$/,
    DATE_OF_BIRTH_REGEX: /^\\d{4}-\\d{2}-\\d{2}$/,
    PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&+=])[A-Za-z\d!@#$%^&+=]{8,16}$/,
    PASSWORD_ERROR_MESSAGE: "Your password must contain the following:" + "\n 1. At least 8 characters and at most 16 characters." + "\n 2. At least one digit." + "\n 3. At least one uppercase letter." + "\n 4. At least one lowercase letter." + "\n 5. At least one special character (e.g., !@#$%^&+=)." + "\n 6. No whitespace.",
    PHONE_NUMBER_REGEX: /^\+?(?:\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
}

export const KycStatus: any = {
    APPROVED: 'APPROVED',
    REVIEW: 'REVIEWING',
    PENDING: 'PENDING'
}