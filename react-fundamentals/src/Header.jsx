import React, { useEffect } from "react";
import { useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    console.log("header-useEffect - componenent did update ");
    document.getElementById("body").classList.toggle("dark");
  },[theme]);

  return (
    <div className={`header`}>
      <div>
        <a href="">home</a>
        <a href="">contact</a>
      </div>
      <div>
        <button
          onClick={() => {
            setLanguage(language == "english" ? "nepal" : "english");
          }}
        >
          toggleLanguage
        </button>
        currentlanguage: {language}&nbsp; currentTheme: {theme}&nbsp;
        <button
          onClick={() => {
            setTheme(theme == "light" ? "dark" : "light");
          }}
        >
          toggleTheme
        </button>
      </div>
    </div>
  );
}
