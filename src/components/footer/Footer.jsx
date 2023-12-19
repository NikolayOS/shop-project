import React from "react";

const Footer = (props) => {
  return (
    <footer className="#ffd740 amber accent-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://github.com/NikolayOS/shop-project" target="_blank">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
