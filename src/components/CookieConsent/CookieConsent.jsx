'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSettings, FiX, FiCheckCircle } from 'react-icons/fi';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#eee] shadow-lg p-4 md:p-6"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-white text-lg font-bold" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-dark">
                  Cookie Preferences
                </h3>
              </div>
              <p className="text-sm md:text-base text-dark2 leading-relaxed mb-4">
                We use cookies to enhance your browsing experience and provide personalized content. 
                By accepting, you agree to our cookie policy in line with South African data protection laws (POPIA & ECTA). 
                You can manage your preferences anytime.
              </p>
              <div className="flex flex-wrap gap-2 text-xs md:text-sm text-dark2">
                <a href="/privacy-policy" className="text-primary hover:text-secondary underline transition-colors">
                  Privacy Policy
                </a>
                <span className="text-gray-400">•</span>
                <a href="/terms-conditions" className="text-primary hover:text-secondary underline transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-3 w-full sm:w-auto">
              <button
                onClick={handleSettings}
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm md:text-base font-medium text-dark border border-[#ddd] rounded-lg hover:bg-gray-50 transition-colors"
                aria-label="Cookie settings"
              >
                <FiSettings className="text-lg" />
                Settings
              </button>
              <button
                onClick={handleReject}
                className="px-4 py-3 text-sm md:text-base font-medium text-dark2 border border-[#ddd] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reject
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-3 text-sm md:text-base font-medium text-white bg-primary rounded-lg hover:bg-secondary transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t border-[#eee]"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base md:text-lg font-semibold text-dark">
                    Cookie Settings
                  </h4>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 text-dark2 hover:text-dark transition-colors"
                    aria-label="Close settings"
                  >
                    <FiX className="text-xl" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-dark2">
                  <div className="bg-[#f4f4f4] p-4 rounded-xl">
                    <strong className="text-dark">Essential Cookies:</strong> Required for basic website functionality. Always active.
                  </div>
                  <div className="bg-[#f4f4f4] p-4 rounded-xl">
                    <strong className="text-dark">Analytics Cookies:</strong> Help us improve our services by understanding usage patterns.
                  </div>
                  <div className="bg-[#f4f4f4] p-4 rounded-xl">
                    <strong className="text-dark">Functional Cookies:</strong> Enhance your experience with personalized features.
                  </div>
                  <div className="bg-[#f4f4f4] p-4 rounded-xl">
                    <strong className="text-dark">Marketing Cookies:</strong> Used for targeted advertising and content recommendations.
                  </div>
                </div>
                <p className="text-xs md:text-sm text-dark2 mt-4">
                  For more information, please review our Privacy Policy. You can change these settings at any time.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;