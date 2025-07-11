import styled from 'styled-components';

// Props do slider
interface SliderProps {
  currentIndex: number;
}

// Props para as setas, esquerda ou da direita
interface ArrowProps {
  direction: 'left' | 'right';
}

// --- Componentes Estilizados ---

export const CarouselContainer = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  margin: auto;
  overflow: hidden;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

// O componente recebe a prop 'currentIndex' para calcular a posição do 'transform'.
export const CarouselSlider = styled.div<SliderProps>`
  display: flex;
  height: 100%;
  transition: transform 0.7s ease-in-out;
  transform: translateX(-${(props) => props.currentIndex * 100}%);
`;

export const CarouselSlide = styled.div`
  flex: 1 0 100%;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const CarouselArrow = styled.button<ArrowProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  /* Posiciona a seta dinamicamente com base na prop 'direction' */
  ${(props) => (props.direction === 'left' ? 'left: 20px;' : 'right: 20px;')}
`;


// ---- Estilos do Conteúdo do Slide ----

export const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: brightness(0.8);
`;

export const TextOverlay = styled.div`
  position: relative;
  z-index: 2;
  text-align: left;
  max-width: 500px;
  padding: 20px;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #cda8e8;
  margin: 0;
  line-height: 1;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-top: 10px;
`;

export const CtaButton = styled.button`
  background-color: #8a2be2;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #7324bf;
  }
`;
