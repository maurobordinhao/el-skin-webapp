import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';

const Carousel = () => {
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

  const slides = [
    { image: img1, title: 'Cuide da sua pele todos os dias' },
    { image: img2, title: 'Tratamento facial' },
    { image: img3, title: 'Esfoliação com argila' },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.image} alt={`slide-${index}`} />
            <div className="carousel-text">
              <h2>{slide.title}</h2>
              <button>Comprar agora</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
