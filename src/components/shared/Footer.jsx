import React from "react";
import "./styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="footer__title"> Hcode©️ 2023 All rights reserved</h1>
      <ul className="footer__social-network">
        <li className="footer__social">
          <a href="https://www.linkedin.com/in/joseluishc/" target="_blanck">
            <i className="bx2 bx bxl-linkedin"></i>
          </a>
        </li>

        <li className="footer__social">
          <a href="https://github.com/JoseLuisHcoder">
            <i className="bx2 bx bxl-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
