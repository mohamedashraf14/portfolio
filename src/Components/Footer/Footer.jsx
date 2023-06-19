import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <h1 className="footer__title">Mohamed Ashraf</h1>
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1Hdphy1VgDM6ClmUWjOTsfsnXmCsEn_5K/view"
                className="footer__link"
                target={"blank"}
              >
                CV
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
          </ul>
          <div className="footer__social">
            <a
              href="https://github.com/mohamedashraf14"
              target={"_blank"}
              className="footer__social-link"
            >
              <i class="uil uil-github-alt"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamedashrafali"
              target={"_blank"}
              className="footer__social-link"
            >
              <i class="uil uil-linkedin-alt"></i>
            </a>
          </div>
          <span className="footer__copy">
            &#169; Mohamed Ashraf. All rigths reserved
          </span>
        </div>
      </footer>
    </>
  );
}
