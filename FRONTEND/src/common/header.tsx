import { faHouse } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import React, { useState, useEffect } from "react";

const HeaderBar = () => {
  const [language, setLanguage] = useState("en");

  // Retry function to wait for the Google Translate dropdown
  const waitForTranslate = (callback: () => void, retries = 20) => {
    const combo = document.querySelector(
      "select.goog-te-combo"
    ) as HTMLSelectElement;
    if (combo) {
      callback();
    } else if (retries > 0) {
      setTimeout(() => waitForTranslate(callback, retries - 1), 500);
    } else {
      console.warn("Google Translate widget not found.");
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    localStorage.setItem("preferredLanguage", selectedLang);

    waitForTranslate(() => {
      const combo = document.querySelector(
        "select.goog-te-combo"
      ) as HTMLSelectElement;
      combo.value = selectedLang;
      combo.dispatchEvent(new Event("change"));
    });
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang && savedLang !== "en") {
      setLanguage(savedLang);
      waitForTranslate(() => {
        const combo = document.querySelector(
          "select.goog-te-combo"
        ) as HTMLSelectElement;
        combo.value = savedLang;
        combo.dispatchEvent(new Event("change"));
      });
    }
  }, []);

  return (
    <header className="app-header">
      <div className="left">
        <FontAwesomeIcon icon={faHouse} />
        <a href="/">Home</a>
      </div>

      <div className="center">
        <a href="/about">About the scheme</a>
        <a href="/how-it-works">How it works</a>
        <a href="/demo">Demo Tutorial</a>
        <a href="/guidelines">Guidelines</a>
        <a href="/contact">Contact</a>
        <a href="/faq">FAQ</a>
      </div>

      <div className="right">
        <a href="/login" className="login">
          Login
        </a>
        <a href="/user-registration" className="register">
          Register
        </a>
        <select
          className="language-select"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="">🌐 Language</option>
          <option value="en">English</option>
          <option value="ta">தமிழ்</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>
    </header>
  );
};

export default HeaderBar;
