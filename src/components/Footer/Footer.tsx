import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram, faFacebookF, faYoutube, faPinterest,
  faTwitter, faLinkedinIn, faSpotify
} from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom'; 

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
          <h4>
            <Link to="/sobre" className='footer-title-link'>
            Sobre a AL SKIN
            </Link>
            </h4>
          <ul>
            <li><Link to="/sobre">Quem somos</Link></li> 
            <li>Time AL SKIN</li>
            <li>Carreiras</li>
          </ul>
        </div>
        <div>
          <h4>Loja AL SKIN</h4>
          <ul>
            <li>Lojas físicas</li>
            <li>Devolução</li>
          </ul>
        </div>
        <div>
          <h4>Fale conosco</h4>
          <ul>
            <li><a href="mailto:oi@alskin.com.br">oi@alskin.com.br</a></li>
            <li>Ajuda</li>
          </ul>
        </div>
        <div>
          <h4>Mais sobre a AL SKIN</h4>
          <ul>
            <li>Blog</li>
            <li>Minha pele</li>
            <li>Ingredientes</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;