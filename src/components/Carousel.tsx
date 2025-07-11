import React, { useState, useEffect, useCallback } from 'react';

// Importando nossos componentes estilizados
import {
  CarouselContainer,
  CarouselWrapper,
  CarouselSlider,
  CarouselSlide,
  CarouselArrow,
  SlideImage,
  TextOverlay,
  Subtitle,
  Title,
  Description,
  CtaButton,
} from './Carousel.styles';

// ===================================================================
// ESTA É A PARTE CRÍTICA
// Verifique se estes imports estão exatamente assim.
// ===================================================================
import banner1 from '../assets/banner-1.jpg';
import banner2 from '../assets/banner-2.jpg';
import banner3 from '../assets/banner-3.jpg';

const slideData = [
  {
    image: banner1, // Usando a variável importada
    subtitle: 'confira nossa linha',
    title: 'corporal',
    description: 'com benefícios além da hidratação',
  },
  {
    image: banner2, // Usando a variável importada
    subtitle: 'descubra a linha',
    title: 'facial',
    description: 'resultados visíveis em poucas semanas',
  },
  {
    image: banner3, // Usando a variável importada
    subtitle: 'para todos os momentos',
    title: 'essenciais',
    description: 'cuidados diários que transformam',
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slideData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const slideInterval = setInterval(goToNext, 5000);
    return () => clearInterval(slideInterval);
  }, [goToNext]);

  return (
    <CarouselContainer>
      <CarouselArrow direction="left" onClick={goToPrevious}>
        &larr;
      </CarouselArrow>
      <CarouselArrow direction="right" onClick={goToNext}>
        &rarr;
      </CarouselArrow>
      
      <CarouselWrapper>
        <CarouselSlider currentIndex={currentIndex}>
          {slideData.map((slide, index) => (
            <CarouselSlide key={index}>
              <SlideImage src={slide.image} alt={slide.title} />
              <TextOverlay>
                <Subtitle>{slide.subtitle}</Subtitle>
                <Title>{slide.title}</Title>
                <Description>{slide.description}</Description>
                <CtaButton>comprar agora &rarr;</CtaButton>
              </TextOverlay>
            </CarouselSlide>
          ))}
        </CarouselSlider>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default Carousel;