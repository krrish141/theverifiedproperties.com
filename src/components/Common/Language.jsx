import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // This will run after the component mounts
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,mr,ur", // Languages: English, Hindi, Marathi, Urdu
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
