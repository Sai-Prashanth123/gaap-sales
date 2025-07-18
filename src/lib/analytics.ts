// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = 'G-NH2KX5JBK2';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined events for your GAAP landing page
export const trackEvents = {
  // Waitlist signup
  waitlistSignup: (email: string, hasName: boolean = false) => {
    event({
      action: 'signup',
      category: 'waitlist',
      label: hasName ? 'with_name' : 'email_only',
    });
  },

  // Button clicks
  ctaClick: (buttonName: string, location: string) => {
    event({
      action: 'click',
      category: 'cta_button',
      label: `${buttonName}_${location}`,
    });
  },

  // Section views (for scroll tracking)
  sectionView: (sectionName: string) => {
    event({
      action: 'view',
      category: 'section',
      label: sectionName,
    });
  },

  // Form interactions
  formStart: (formName: string) => {
    event({
      action: 'start',
      category: 'form',
      label: formName,
    });
  },

  formError: (formName: string, errorType: string) => {
    event({
      action: 'error',
      category: 'form',
      label: `${formName}_${errorType}`,
    });
  },
}; 