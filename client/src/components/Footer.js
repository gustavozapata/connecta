import React from "react";

import "./styles/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <p>
        Built with{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>{" "}
        by{" "}
        <a
          href="https://gustavozapata.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gustavo Zapata
        </a>{" "}
        &#64;{" "}
        <a href="https://cisco.com/" target="_blank" rel="noopener noreferrer">
          Cisco
        </a>
      </p>
      <h4>CONNECTA &copy; 2019</h4>
    </div>
  );
}

export default Footer;
