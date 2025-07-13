import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram, faFacebookF, faYoutube, faPinterest,
  faTwitter, faLinkedinIn, faSpotify
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faPinterest} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faSpotify} />
      </div>

      <div className="footer-links">
        <div>
          <h4>Sobre a AL SKIN</h4>
          <ul>
            <li>quem somos</li>
            <li>time AL SKIN</li>
            <li>carreiras</li>
          </ul>
        </div>
        <div>
          <h4>Loja AL SKIN</h4>
          <ul>
            <li>lojas físicas</li>
            <li>devolução</li>
          </ul>
        </div>
        <div>
          <h4>Atendimento</h4>
          <ul>
            <li>oi@alskin.com.br</li>
            <li>ajuda</li>
          </ul>
        </div>
        <div>
          <h4>Blog AL SKIN</h4>
          <ul>
            <li>Minha pele</li>
            <li>Ingredientes</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
