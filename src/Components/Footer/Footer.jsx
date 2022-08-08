import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import './footer.css'
const Footer = () => {
  return (
    <section id="socials">
    <div class="social-container">
      <h3>My social Media :</h3>
      
      <a href="https://twitter.com/Captain_Jow"
        className="youtube social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/yusuf.sarraj/"
        className="youtube social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/yousef-alsarraj-36166423a/"
        className="Linkin">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      </div>

    </section>


  )
}

export default Footer