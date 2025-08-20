'use client';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { carouselService, type ICarouselItem } from '@/service/carouselService';

export default function Carousel() {
  const [slides, setSlides] = useState<ICarouselItem[]>([]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await carouselService.getCarouselItems();
        if (alive) setSlides(data ?? []);
      } catch (err) {
        console.error('Erro ao carregar o carrossel:', err);
      }
    })();
    return () => { alive = false; };
  }, []);

  const settings: import('react-slick').Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: false,
  };

  // Fallback se o /carousel não estiver respondendo
  const items = slides.length
    ? slides
    : [
        { id: 'ph-1', title: 'Bem-vindo', subtitle: 'AL SKIN', description: 'Cuidados que combinam com você', backgroundImage: '/img1.png' },
        { id: 'ph-2', title: 'Novidades', subtitle: 'Lançamentos', description: 'Confira os últimos produtos', backgroundImage: '/img2.png' },
        { id: 'ph-3', title: 'Ofertas',   subtitle: 'Só hoje',    description: 'Descontos imperdíveis',      backgroundImage: '/img1.png' },
      ];

  return (
    <div className={styles.container} role="region" aria-label="Destaques">
      <Slider {...settings}>
        {items.map(s => (
          <div key={s.id} className={styles.slide}>
            <img className={styles.image} src={s.backgroundImage} alt={s.title} />
            <div className={styles.overlay}>
              {s.subtitle && <h4>{s.subtitle}</h4>}
              {s.title && <h2>{s.title}</h2>}
              {s.description && <p>{s.description}</p>}
              <button className={styles.cta} type="button">Comprar agora</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
