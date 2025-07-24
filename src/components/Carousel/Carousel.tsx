import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import { carouselService, ICarouselItem } from '../../service/carouselService';

const Carousel = () => {
  const [slides, setSlides] = useState<ICarouselItem[]>([]);

  useEffect(() => {
    const loadCarousel = async () => {
      try {
        const data = await carouselService.getCarouselItems();
        setSlides(data);
      } catch (error) {
        console.error('Erro ao carregar o carrossel:', error);
      }
    };

    loadCarousel();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div className="carousel-slide" key={slide.id}>
            <img src={slide.backgroundImage} alt={slide.title} />
            <div className="carousel-text">
              <h4>{slide.subtitle}</h4>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button>Comprar agora</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;