import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Satyam Kaushik")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Connnect{" "}
          <a href="https://www.linkedin.com/in/satyam-kaushik-44b170191">
            LinkedIn            
          </a>,
          Gmail : kaushiksatyam54@gmail.com,
          Phone : +91-6260680915
        </p>
      </div>
    </Fade>
  );
}
