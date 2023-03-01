import React from "react";
import "./Svg.css";
import { motion, useAnimation } from "framer-motion";

const svgVariants = {
  hover: {
    scale: 1.2,
  },
  tap: {
    scale: 0.8,
  },
};

const pathVariants = {
  hover: {
    x: [0, 5],
    y: [0, -5],
    transition: {
      duration: 0.25,
    },
  },
  initial: {
    x: 0,
    y: 0,
  },
};

const pathVariants2 = {
  hover: {
    x: [0, -5],
    y: [0, +5],
    transition: {
      duration: 0.25,
    },
  },
  initial: {
    x: 0,
    y: 0,
  },
};

const LinkSvg = ({ setShowModal }) => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const handleMouseEnterControls = () => {
    controls.start("hover");
    controls2.start("hover");
  };

  const handleMouseLeaveControls = () => {
    controls.start("initial");
    controls2.start("initial");
  };

  const showModal = () => {
    setShowModal(true);
  };

  return (
    <motion.div
      onClick={showModal}
      onMouseEnter={handleMouseEnterControls}
      onMouseLeave={handleMouseLeaveControls}
      variants={svgVariants}
      whileHover="hover"
      whileTap="tap"
      className="svg"
    >
      <svg
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        xmlns="http://www.w3.org/2000/motion."
        viewBox="0 0 24 24"
      >
        <motion.path
          variants={pathVariants}
          animate={controls}
          className="svg-path"
          d="M16 0l-3 9h9l-1.866 2h-14.4l10.266-11z"
        />
        <motion.path
          variants={pathVariants2}
          animate={controls2}
          className="svg-path"
          d="M 16 0 m 2.267 13 h -14.4 l -1.867 2 h 9 l -3 9 l 10.267 -11 z"
        />
      </svg>
    </motion.div>
  );
};

export default LinkSvg;
