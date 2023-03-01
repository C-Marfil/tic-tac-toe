import React from "react";
import PropTypes from "prop-types";
import DarkMode from "../../assets/Svgs/DarkMode";
import LinkSvg from "../../assets/Svgs/Link";
import "../../assets/Svgs/Svg.css";

const Footer = ({ setShowModal }) => {
  return (
    <footer>
      <LinkSvg setShowModal={setShowModal} />
      <DarkMode />
    </footer>
  );
};

Footer.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default Footer;
