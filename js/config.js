/**
 * GateQR Manager - Landing Page Configuration
 * 
 * Edit download URLs, WhatsApp number, and brand information here.
 * Changes here take effect immediately across all landing page buttons and links.
 */
window.APP_CONFIG = {
  brandName: {
    en: "GateQR Manager",
    ar: "بوابة QR",
  },
  
  // WhatsApp phone number with country code
  whatsappNumber: "967780791584",
  
  // Default WhatsApp message sent when user clicks "Contact Administration"
  whatsappMessage: {
    en: "Hello, I am interested in GateQR Manager and would like to request an active account.",
    ar: "مرحباً، أود الاستفسار عن نظام بوابة QR وطلب إنشاء وتفعيل حساب جديد.",
  },

  // Direct download URLs for software releases
  downloads: {
    windows: "https://github.com/RyanOsama/QR-code/releases/download/v1.0.2/EventQRManager-Setup-v1.0.2.exe",
    android: "https://github.com/RyanOsama/QR-code/releases/download/v1.0.0/EventScanner.apk",
  },

  // Version numbers shown on download cards
  versions: {
    windows: "v1.0.2",
    android: "v1.0.0",
  },

  // Support & social links (optional)
  links: {
    supportEmail: "support@gateqr.com",
  }
};
