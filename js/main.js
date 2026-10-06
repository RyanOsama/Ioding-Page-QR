/**
 * GateQR Manager - Interactive Logic
 * Handles language switching (EN/AR with RTL), dynamic config URL binding,
 * mobile drawer, FAQ accordion, and scroll observation.
 */

(function () {
  'use strict';

  // State
  let currentLang = localStorage.getItem('gateqr_lang') || 'en';

  // DOM Elements
  const htmlEl = document.documentElement;
  const langSwitcherBtn = document.getElementById('lang-switcher');
  const langLabel = document.getElementById('lang-label');
  const siteHeader = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const faqItems = document.querySelectorAll('.faq-item');

  // Config Links
  const btnDownloadWindows = document.getElementById('btn-download-windows');
  const finalBtnWindows = document.getElementById('final-btn-windows');
  const btnDownloadAndroid = document.getElementById('btn-download-android');
  const finalBtnAndroid = document.getElementById('final-btn-android');

  // WhatsApp Buttons
  const heroWhatsappBtn = document.getElementById('hero-whatsapp-btn');
  const accountWhatsappBtn = document.getElementById('account-whatsapp-btn');
  const finalWhatsappBtn = document.getElementById('final-btn-whatsapp');
  const footerWhatsappBtn = document.getElementById('footer-whatsapp-btn');

  /**
   * Build WhatsApp URL with phone and URL-encoded message
   */
  function getWhatsAppUrl(lang) {
    const config = window.APP_CONFIG;
    if (!config) return '#';
    const number = config.whatsappNumber.replace(/[^0-9]/g, '');
    const message = (config.whatsappMessage && config.whatsappMessage[lang])
      ? config.whatsappMessage[lang]
      : (config.whatsappMessage ? config.whatsappMessage.en : '');
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Apply App Config download URLs & WhatsApp URLs
   */
  function applyConfigUrls(lang) {
    const config = window.APP_CONFIG;
    if (!config) return;

    // Windows Downloads
    if (btnDownloadWindows && config.downloads && config.downloads.windows) {
      btnDownloadWindows.href = config.downloads.windows;
    }
    if (finalBtnWindows && config.downloads && config.downloads.windows) {
      finalBtnWindows.href = config.downloads.windows;
    }

    // Android Downloads
    if (btnDownloadAndroid && config.downloads && config.downloads.android) {
      btnDownloadAndroid.href = config.downloads.android;
    }
    if (finalBtnAndroid && config.downloads && config.downloads.android) {
      finalBtnAndroid.href = config.downloads.android;
    }

    // WhatsApp
    const waUrl = getWhatsAppUrl(lang);
    [heroWhatsappBtn, accountWhatsappBtn, finalWhatsappBtn, footerWhatsappBtn].forEach(btn => {
      if (btn) btn.href = waUrl;
    });
  }

  /**
   * Update page text for selected language
   */
  function setLanguage(lang) {
    if (!window.APP_TRANSLATIONS || !window.APP_TRANSLATIONS[lang]) {
      console.warn(`Translations for ${lang} not found.`);
      return;
    }

    const dict = window.APP_TRANSLATIONS[lang];
    currentLang = lang;
    localStorage.setItem('gateqr_lang', lang);

    // Direction & HTML Attributes
    if (lang === 'ar') {
      htmlEl.setAttribute('lang', 'ar');
      htmlEl.setAttribute('dir', 'rtl');
    } else {
      htmlEl.setAttribute('lang', 'en');
      htmlEl.setAttribute('dir', 'ltr');
    }

    // Update document title & meta tags
    if (dict.docTitle) {
      document.title = dict.docTitle;
    }
    const metaDesc = document.getElementById('meta-desc');
    if (metaDesc && dict.metaDescription) {
      metaDesc.setAttribute('content', dict.metaDescription);
    }

    // Update all elements with data-i18n attribute
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        // If element is an input with placeholder
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update Language Toggle Label
    if (langLabel) {
      langLabel.textContent = lang === 'en' ? 'العربية' : 'English';
    }

    // Update Dynamic WhatsApp links
    applyConfigUrls(lang);
  }

  /**
   * Language Switcher click handler
   */
  if (langSwitcherBtn) {
    langSwitcherBtn.addEventListener('click', function () {
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      setLanguage(nextLang);
    });
  }

  /**
   * Mobile Menu Drawer Toggle
   */
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /**
   * FAQ Accordion Interactivity
   */
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', function () {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        if (isActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  /**
   * Header Scroll Shadow & Active Nav Link Observer
   */
  window.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // Scroll spy for nav links
    const scrollPos = window.scrollY + 100;
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Initialize
  document.addEventListener('DOMContentLoaded', function () {
    setLanguage(currentLang);
    applyConfigUrls(currentLang);
  });

  // Also run immediately in case DOM is already parsed
  setLanguage(currentLang);
  applyConfigUrls(currentLang);

})();





