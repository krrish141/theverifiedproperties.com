import React, { useEffect } from "react";
import Pages from "./components/pages/Pages";


// Function to dynamically load scripts
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false; // Ensure scripts execute in order
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};



function App() {
  useEffect(() => {
    const loadScriptsSequentially = async () => {
      try {
        // Load required scripts in sequence
        await loadScript(`${process.env.PUBLIC_URL}/assets/js/vendor/jquery-1.12.4.min.js`);
        await loadScript(`${process.env.PUBLIC_URL}/assets/js/vendor/jquery-migrate-1.4.1.min.js`);
        await loadScript(`${process.env.PUBLIC_URL}/assets/js/vendor/modernizr-2.8.3.min.js`);
        await loadScript(`${process.env.PUBLIC_URL}/assets/js/popper.min.js`);
        await loadScript(`${process.env.PUBLIC_URL}/assets/js/bootstrap.min.js`);
        await loadScript(`${process.env.PUBLIC_URL}/assets/js/plugins.js`);
        await loadScript(`${process.env.PUBLIC_URL}/assets/js/map-place.js`);
        await loadScript(`${process.env.PUBLIC_URL}/assets/js/main.js`);
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    // Check if DOM is fully loaded before loading scripts
    if (document.readyState === "complete") {
      loadScriptsSequentially();
    } else {
      window.addEventListener("load", loadScriptsSequentially);
      return () => window.removeEventListener("load", loadScriptsSequentially);
    }
  }, []); // Empty dependency array ensures this runs only once

  

  return (
    <>
      <Pages />
    </>
  );
}



export default App;
