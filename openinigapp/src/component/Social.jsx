import React from 'react';
import '../pages/SignIn.css';
 import github from "../assets/github.png"
 import linkdin from "../assets/linkdin.png"
 import twitter from "../assets/twitter.png"
 import discord from "../assets/discord.png"
const Socials = () => {
  return (
    <div className="socials__wrapper">
      <ul className="socials__links">
        <li>
          <a href="https://github.com/" target="blank" className="social__link">
           
            <img className="ri-github-fill" src={github} alt="github" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            target="blank"
            className="social__link"
          >
            
             <img className="ri-twitter-fill" src={twitter} alt="twittter" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/"
            target="blank"
            className="social__link"
          >
            
              <img src={linkdin} className="ri-linkedin-box-fill" alt="linkdin" />
          </a>
        </li>
        <li>
          <a
            href="https://discord.com/"
            target="blank"
            className="social__link"
          >
           
            <img className="ri-discord-fill" src={discord} alt="discord" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;