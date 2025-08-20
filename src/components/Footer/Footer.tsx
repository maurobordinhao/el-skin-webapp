'use client';

import Link from 'next/link';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram, faFacebookF, faYoutube, faPinterest,
  faTwitter, faLinkedinIn, faSpotify
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* linha de ícones sociais */}
      <div className={styles.social}>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faPinterest} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faSpotify} />
      </div>

      {/* 4 colunas */}
      <div className={styles.grid}>
        <div className={styles.col}>
          <h4>Sobre a AL SKIN</h4>
          <ul>
            <li><Link href="/about">Quem somos</Link></li>
            <li><Link href="/about#time">Time AL SKIN</Link></li>
            <li><Link href="/about#carreiras">Carreiras</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Loja AL SKIN</h4>
          <ul>
            <li><Link href="/stores">Lojas físicas</Link></li>
            <li><Link href="/returns">Devolução</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Fale conosco</h4>
          <ul>
            <li><a href="mailto:oi@alskin.com.br">oi@alskin.com.br</a></li>
            <li><Link href="/help">Ajuda</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Mais sobre a AL SKIN</h4>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/skin">Minha pele</Link></li>
            <li><Link href="/ingredients">Ingredientes</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
