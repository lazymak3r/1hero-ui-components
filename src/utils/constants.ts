export const VALIDATION_MESSAGES = {
  PHONE_FORMAT: 'Invalid phone number. Please try again.',
  EMAIL_REQUIRED: 'E-mail is required',
  EMAIL_FORMAT: 'Invalid E-mail format'
};

export const PHONE_REGEX = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i);
export const EMAIL_REGEX = new RegExp(/^[a-z0-9\.]+@[a-z]+\.[a-z]{2,3}$/i);
