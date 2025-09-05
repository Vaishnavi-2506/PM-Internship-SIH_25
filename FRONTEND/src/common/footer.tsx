import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      <div className="footer-links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
