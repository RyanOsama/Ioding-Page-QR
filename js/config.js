/**
 * Munasabat - Landing Page Configuration
 * 
 * Edit download URLs, WhatsApp number, and brand information here.
 * Changes here take effect immediately across all landing page buttons and links.
 */
window.APP_CONFIG = {
  brandName: {
    en: "Munasabat",
    ar: "مناسبات",
  },
  
  // WhatsApp phone number with country code
  whatsappNumber: "967780791584",
  
  // Default WhatsApp message sent when user clicks "Contact Administration"
  whatsappMessage: {
    en: "Hello, I am interested in Munasabat system and would like to request an active account.",
    ar: "مرحباً، أود الاستفسار عن منظومة مناسبات (Munasabat) وطلب إنشاء وتفعيل حساب جديد.",
  },

  // Direct download URLs for software releases
  downloads: {
    windows: "https://github.com/RyanOsama/QR-code/releases/download/v1.0.3/Munasabat-Setup-v1.0.3.exe",
    android: "https://github.com/RyanOsama/QR-code/releases/download/v1.0.3/EventScanner.apk",
  },

  // Version numbers shown on download cards
  versions: {
    windows: "v1.0.3",
    android: "v1.0.3",
  },

  // Support & social links (optional)
  links: {
    supportEmail: "support@munasabat.com",
  }
};
