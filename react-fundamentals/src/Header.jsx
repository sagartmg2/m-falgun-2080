import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ theme, setTheme }) {

  const [language, setLanguage] = useState("english");
  // const [theme, setTheme] = useState("light");

  



  /*
    
    useEffect(() => {
      console.log("header-useEffect - componenent did update ");
      // document.getElementById("body").classList.toggle("dark");

    },[theme]); 
    
    */

  return (
    <div className={`header`}>
      <div>
        {/* <a href="/">home</a>
        <a href="/about">about</a> */}
        <Link to="/">home</Link>&nbsp;
        <Link to="/about">about</Link>&nbsp;
        <Link to="/products">products</Link>&nbsp;
        <Link to="/products/watch">watch</Link>&nbsp;
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
            /* setTheme function  of App */
            setTheme(theme == "light" ? "dark" : "light");
          }}
        >
          toggleTheme
        </button>
      </div>
    </div>
  );
}
