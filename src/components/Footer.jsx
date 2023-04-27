import React from "react";
import My from "../assets/Myimage.jpg";
import { SiStackoverflow, SiLinkedin, SiGithub, SiRadar } from "react-icons/si";
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={My} alt="Founder" />

        <h2>Rajesh Kumar Majhi</h2>
        <p>Motivation is temporary,But discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://stackoverflow.com"
            target={"blank"}
          >
            <SiStackoverflow />
          </a>
          <a
            href="https://www.linkedin.com/in/rajesh-kumar-72bb50129/"
            target={"blank"}
          >
            <SiLinkedin />
          </a>
          <a href="https://github.com/rajeshkumar2233" target={"blank"}>
            <SiGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <SiRadar />
      </a>
    </footer>
  );
};

export default Footer;
