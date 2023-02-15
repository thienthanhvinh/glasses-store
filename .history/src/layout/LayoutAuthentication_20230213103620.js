import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

const LayoutAuthentication = ({ heading, question, children }) => {
  const [isDarkMode, setDarkMode] = useState(
    () => localStorage.theme === "dark"
  );
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  useEffect(() => {
    const html = window.document.documentElement;
    const prev = isDarkMode ? "light" : "dark";
    html.classList.remove(prev);
    const next = isDarkMode ? "dark" : "light";
    html.classList.add(next);
    localStorage.setItem("theme", next);
  }, [isDarkMode]);

  return (
    <div className="w-full h-screen bg-white dark:bg-dark-four-color p-12">
      <div className="mb-10 flex justify-between items-center">
        <Link to="/" className="inline-block">
          <img
            src="/logo.png"
            alt=""
            className="w-[130px] h-auto object-cover"
          />
        </Link>
        <label
          htmlFor="toggle"
          className="cursor-pointer toggle-switch inline-block"
        >
          <input
            type="checkbox"
            name=""
            id="toggle"
            className="darkmode-input hidden"
          />

          <div className="w-[60px] h-8 border border-gray-300 rounded-full flex items-center">
           
              {!isDarkMode ? (
                <div className="active-light">
                  <BsFillSunFill
                    size={"24px"}
                    color={"#e9c46a"}
                    onClick={() => toggleDarkMode(!isDarkMode)}
                  ></BsFillSunFill>
                </div>
              ) : (
                <div className="active-dark">
                  <FaMoon
                    size={"24px"}
                    color={"#808191"}
                    onClick={() => toggleDarkMode(!isDarkMode)}
                  ></FaMoon>
                </div>
              )}
          </div>
        </label>
      </div>
      <div className="w-full max-w-[550px] bg-white-400  dark:bg-dark-five-color dark:text-white shadow-md rounded-lg mx-auto px-12 py-5">
        <h2 className="text-center text-[20px] font-semibold mb-1">
          {heading}
        </h2>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  question: PropTypes.string,
  children: PropTypes.node,
};

export default LayoutAuthentication;
