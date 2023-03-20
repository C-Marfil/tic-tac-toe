import React from "react";
import PropTypes from "prop-types";
import LinkSvg from "../../assets/Svgs/Link";
import "../../assets/Svgs/Svg.css";

const Footer = ({ setShowModal }) => {
  return (
    <footer>
      <LinkSvg setShowModal={setShowModal} />
    </footer>
  );
};

Footer.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default Footer;
