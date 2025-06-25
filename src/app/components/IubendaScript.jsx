'use client';

import { useEffect } from 'react';

const IubendaScript = () => {
  useEffect(() => {
    // Configura Iubenda solo lato client dopo l'hydration
    if (typeof window !== 'undefined') {
      // Configurazione Iubenda
      window._iub = window._iub || [];
      window._iub.csConfiguration = {
        "cookiePolicyId": 10812163,
        "siteId": 3752638,
        "whitelabel": false,
        "lang": "it",
        "storage": {
          "useSiteId": true
        },
        "banner": {
          "acceptButtonDisplay": true,
          "customizeButtonDisplay": true,
          "position": "float-bottom-center",
          "backgroundColor": "#0c0c0c",
          "textColor": "#ffffff",
          "acceptButtonColor": "#dc2626",
          "acceptButtonCaptionColor": "#ffffff",
          "customizeButtonColor": "#ffffff",
          "customizeButtonCaptionColor": "#0c0c0c",
          "rejectButtonDisplay": true,
          "rejectButtonColor": "#ffffff",
          "rejectButtonCaptionColor": "#0c0c0c",
          "showPurposesOnFirstAccess": true,
          "explicitWithdrawal": true
        }
      };

      // Carica lo script di autoblocking
      const autoBlockingScript = document.createElement('script');
      autoBlockingScript.src = 'https://cs.iubenda.com/autoblocking/3752638.js';
      autoBlockingScript.type = 'text/javascript';
      document.head.appendChild(autoBlockingScript);

      // Carica lo script principale Iubenda
      const iubendaScript = document.createElement('script');
      iubendaScript.src = '//cdn.iubenda.com/cs/iubenda_cs.js';
      iubendaScript.type = 'text/javascript';
      iubendaScript.charset = 'utf-8';
      iubendaScript.async = true;
      document.head.appendChild(iubendaScript);
    }
  }, []);

  return null; // Questo componente non renderizza nulla
};

export default IubendaScript; 