/**
 * Utility functions for tracking analytics with the waitlist
 */

/**
 * Track a waitlist signup event
 * 
 * @param {Object} userData - User data from the waitlist form
 * @param {string} source - Where the signup came from (e.g., 'homepage', 'modal', 'footer')
 */
 export const trackWaitlistSignup = (userData, source = 'unknown') => {
    try {
      // If you have Google Analytics
      if (window.gtag) {
        window.gtag('event', 'waitlist_signup', {
          'event_category': 'engagement',
          'event_label': source,
          'interest': userData.interest
        });
      }
      
      // If you have Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Waitlist Signup',
          content_category: source,
          value: 1,
          currency: 'USD'
        });
      }
      
      // If you have custom analytics
      logCustomAnalytics('waitlist_signup', {
        ...userData,
        source,
        timestamp: new Date().toISOString()
      });
      
    } catch (error) {
      console.warn('Error tracking waitlist signup:', error);
      // Non-critical error, so we don't throw
    }
  };
  
  /**
   * Track when a user opens the waitlist modal
   * 
   * @param {string} source - Where the modal was opened from
   */
  export const trackWaitlistModalOpen = (source = 'unknown') => {
    try {
      // If you have Google Analytics
      if (window.gtag) {
        window.gtag('event', 'waitlist_modal_open', {
          'event_category': 'engagement',
          'event_label': source
        });
      }
    } catch (error) {
      console.warn('Error tracking modal open:', error);
    }
  };
  
  /**
   * Track waitlist form submission errors
   * 
   * @param {string} errorType - Type of error
   * @param {string} errorMessage - Error message
   */
  export const trackWaitlistError = (errorType, errorMessage) => {
    try {
      // If you have Google Analytics
      if (window.gtag) {
        window.gtag('event', 'waitlist_error', {
          'event_category': 'error',
          'event_label': errorType,
          'value': errorMessage
        });
      }
    } catch (error) {
      console.warn('Error tracking form error:', error);
    }
  };
  
  /**
   * Helper function for custom analytics implementation
   * 
   * @param {string} eventName - Name of the event
   * @param {Object} eventData - Event data to log
   */
  const logCustomAnalytics = (eventName, eventData) => {
    // This is where you would implement your own analytics
    // For example, sending to a custom endpoint
    
    // Example implementation:
    if (process.env.REACT_APP_ENABLE_CUSTOM_ANALYTICS === 'true') {
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event: eventName,
          data: eventData,
          appVersion: process.env.REACT_APP_VERSION || '1.0.0',
          clientTimestamp: new Date().toISOString()
        }),
        // We use keepalive to ensure the request completes even if the page is being unloaded
        keepalive: true
      }).catch(err => console.warn('Failed to log analytics:', err));
    }
  };