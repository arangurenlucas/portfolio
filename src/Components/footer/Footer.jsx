import React from "react";
import "./footer.css";
import ContactForm from "./ContactForm";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <ContactForm />
      </div>
      <div className="footer-contact">
        <h3>form2</h3>
        <p></p>
      </div>
      <div className="footer-sns">
        <div className="design-by">
          Developed and designed by Aranguren Lucas
        </div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/arangurenlucas/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a
            href="https://github.com/arangurenlucas"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
