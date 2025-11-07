/**
 * Form validation utilities for contact form
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates email format
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email || email.trim() === '') {
    return { isValid: false, error: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  // Additional check for common typos
  const commonDomainTypos = ['gmial.com', 'gmai.com', 'yahooo.com', 'outlok.com'];
  const domain = email.split('@')[1]?.toLowerCase();
  if (domain && commonDomainTypos.includes(domain)) {
    return { isValid: false, error: 'Please check your email domain for typos' };
  }

  return { isValid: true };
};

/**
 * Validates Australian phone number format
 */
export const validatePhone = (phone: string): ValidationResult => {
  if (!phone || phone.trim() === '') {
    return { isValid: true }; // Phone is optional
  }

  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');

  // Australian phone numbers: mobile (04XX XXX XXX) or landline with area code
  // Mobile: 10 digits starting with 04
  // Landline: 10 digits starting with 0
  if (digitsOnly.length === 10 && digitsOnly.startsWith('0')) {
    return { isValid: true };
  }

  // Also accept international format (+61...)
  if (digitsOnly.length === 11 && digitsOnly.startsWith('61')) {
    return { isValid: true };
  }

  return {
    isValid: false,
    error: 'Please enter a valid Australian phone number (e.g., 04XX XXX XXX)'
  };
};

/**
 * Validates name field
 */
export const validateName = (name: string): ValidationResult => {
  if (!name || name.trim() === '') {
    return { isValid: false, error: 'Name is required' };
  }

  if (name.trim().length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' };
  }

  if (name.trim().length > 100) {
    return { isValid: false, error: 'Name must be less than 100 characters' };
  }

  // Check for suspicious patterns (all numbers, special characters only)
  if (/^[0-9]+$/.test(name.trim())) {
    return { isValid: false, error: 'Please enter a valid name' };
  }

  return { isValid: true };
};

/**
 * Validates message field
 */
export const validateMessage = (message: string): ValidationResult => {
  if (!message || message.trim() === '') {
    return { isValid: false, error: 'Message is required' };
  }

  if (message.trim().length < 10) {
    return { isValid: false, error: 'Message must be at least 10 characters' };
  }

  if (message.trim().length > 5000) {
    return { isValid: false, error: 'Message must be less than 5000 characters' };
  }

  return { isValid: true };
};

/**
 * Validates company name
 */
export const validateCompany = (company: string): ValidationResult => {
  if (!company || company.trim() === '') {
    return { isValid: true }; // Company is optional
  }

  if (company.trim().length > 200) {
    return { isValid: false, error: 'Company name must be less than 200 characters' };
  }

  return { isValid: true };
};

/**
 * Sanitizes input to prevent XSS attacks
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

/**
 * Rate limiting: Check if user has submitted too recently
 */
const RATE_LIMIT_KEY = 'contact_form_last_submit';
const RATE_LIMIT_MINUTES = 5;

export const checkRateLimit = (): ValidationResult => {
  const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY);

  if (lastSubmit) {
    const lastSubmitTime = parseInt(lastSubmit, 10);
    const now = Date.now();
    const timeDiff = now - lastSubmitTime;
    const minutesDiff = timeDiff / 1000 / 60;

    if (minutesDiff < RATE_LIMIT_MINUTES) {
      const remainingMinutes = Math.ceil(RATE_LIMIT_MINUTES - minutesDiff);
      return {
        isValid: false,
        error: `Please wait ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''} before submitting again`
      };
    }
  }

  return { isValid: true };
};

export const updateRateLimit = (): void => {
  localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
};

/**
 * Validates all form fields
 */
export interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export const validateForm = (formData: FormData): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  const nameValidation = validateName(formData.name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error!;
  }

  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error!;
  }

  const phoneValidation = validatePhone(formData.phone);
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.error!;
  }

  const companyValidation = validateCompany(formData.company);
  if (!companyValidation.isValid) {
    errors.company = companyValidation.error!;
  }

  const messageValidation = validateMessage(formData.message);
  if (!messageValidation.isValid) {
    errors.message = messageValidation.error!;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
