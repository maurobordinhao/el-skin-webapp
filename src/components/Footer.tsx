import { Link } from 'react-router-dom';

import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaTwitter,
  FaLinkedinIn,
  FaSpotify,
} from 'react-icons/fa6';

// Importe nosso novo componente Icon
import Icon from './Icon'; 

import {
  FooterContainer,
  SocialLinksContainer,
  SocialIconLink,
  LinksSection,
  LinkColumn,
  ColumnTitle,
  FooterLink
} from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialLinksContainer>
        {/* Usando o componente Icon para cada ícone */}
        <SocialIconLink href="/"><Icon as={FaInstagram} /></SocialIconLink>
        <SocialIconLink href="/"><Icon as={FaFacebookF} /></SocialIconLink>
        <SocialIconLink href="/"><Icon as={FaYoutube} /></SocialIconLink>
        <SocialIconLink href="/"><Icon as={FaPinterestP} /></SocialIconLink>
        <SocialIconLink href="/"><Icon as={FaTwitter} /></SocialIconLink>
        <SocialIconLink href="/"><Icon as={FaLinkedinIn} /></SocialIconLink>
        <SocialIconLink href="/"><Icon as={FaSpotify} /></SocialIconLink>
      </SocialLinksContainer>

      <LinksSection>
        <LinkColumn>
          <ColumnTitle>Sobre a AL SKIN</ColumnTitle>
          <FooterLink as={Link} to="/sobre">- quem somos</FooterLink>
          <FooterLink as={Link} to="/time">- time AL SKIN</FooterLink>
          <FooterLink as={Link} to="/carreiras">- carreiras</FooterLink>
        </LinkColumn>
        {/* ...outras colunas... */}
      </LinksSection>
    </FooterContainer>
  );
};

export default Footer;