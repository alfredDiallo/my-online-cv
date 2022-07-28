import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-Moi</h1>
          <ul>
            <li>
              <i className="fas fa-map"> </i>{" "}
              <span> Saint-Louis , Sénégal</span>
            </li>
            <li>
              <i className="fas fa-mobile"></i>
              <CopyToClipboard text="+221772536485">
                <span
                  className="inputMobile"
                  onClick={() => {
                    alert("Téléphone copié");
                  }}
                >
                  +221-77-253-64-85
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="dialloalfred@gmail.com">
                <span
                  className="inputMobile"
                  onClick={() => {
                    alert("Adresse mail copié");
                  }}
                >
                  dialloalfred@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="www.github.com" target="_blank" rel="noopener noreferrer">
              <h4>GitHub</h4>
              <i className="fab fa-github"></i>
            </a>
            <a href="www.twitter.com" target="_blank" rel="noopener noreferrer">
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Instagram</h4>
              <i className="fab fa-instagram"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
