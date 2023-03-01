import React from "react";
import { motion } from "framer-motion";
import "./Svg.css";
import "./DarkModeSvgAnimation.css";

const containerVariants = {
  hover: {
    scale: 1.2,
  },
  tap: {
    scale: 0.8,
  },
};

const DarkMode = () => {
  const changeThemeMode = () => {
    const style = getComputedStyle(document.body);
    let primaryColor = style.getPropertyValue("--primary-color");
    let secondaryColor = style.getPropertyValue("--secondary-color");

    [primaryColor, secondaryColor] = [secondaryColor, primaryColor];

    const root = document.documentElement;
    root.style.setProperty("--primary-color", primaryColor);
    root.style.setProperty("--secondary-color", secondaryColor);
  };

  return (
    <motion.div
      onClick={changeThemeMode}
      variants={containerVariants}
      whileHover="hover"
      whileTap="tap"
      className="svg darkMode-svg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          className="svg-path darkMode-svg-path"
          d="M 10 0 C 28 0 28 23 10 23 C 22 23 22 0 10 0"
        />
      </svg>
    </motion.div>
  );
};

export default DarkMode;
