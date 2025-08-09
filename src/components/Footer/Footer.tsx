import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram, faFacebookF, faYoutube, faPinterest,
  faTwitter, faLinkedinIn, faSpotify
} from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faPinterest} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faSpotify} />
      </SocialIcons>

      <FooterLinks>
        <div>
          <h4>
            <StyledLink to="/sobre">
              Sobre a AL SKIN
            </StyledLink>
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
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;

// Styled Components

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 40px 20px;
  text-align: center;
  color: #333;
`;

const SocialIcons = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;

  svg {
    font-size: 20px;
    background: #555;
    color: white;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  text-align: left;

  h4 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 14px;
    margin-bottom: 6px;
    color: #666;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
