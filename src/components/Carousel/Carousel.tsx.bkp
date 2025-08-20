import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
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
    <CarouselContainer>
      <StyledSlider {...settings}>
        {slides.map((slide) => (
          <Slide key={slide.id}>
            <img src={slide.backgroundImage} alt={slide.title} />
            <TextOverlay>
              <h4>{slide.subtitle}</h4>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button>Comprar agora</button>
            </TextOverlay>
          </Slide>
        ))}
      </StyledSlider>
    </CarouselContainer>
  );
};

export default Carousel;

// Styled Components
const CarouselContainer = styled.div`
  position: relative;
  width: 100vw;
  margin: 0;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    z-index: 2;
    width: 48px;
    height: 48px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }

    &::before {
      font-size: 24px;
      color: white;
    }
  }

  .slick-prev {
    left: 16px;
  }

  .slick-next {
    right: 16px;
  }
`;

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 500px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  max-width: 300px;

  button {
    margin-top: 12px;
    background-color: #8f4fff;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 999px;
    cursor: pointer;
    font-weight: bold;
  }
`;
