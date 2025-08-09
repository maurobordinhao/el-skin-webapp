// src/pages/Sobre.tsx
import React from 'react';
import styled from 'styled-components';
import sobre1 from '../assets/sobre1.png';
import sobre2 from '../assets/sobre2.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  flex-wrap: wrap;
`;

const Texto = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Lateral = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Img = styled.img`
  max-width: 100%;
  margin-top: 1rem;
`;

const Botao = styled.button`
  margin-top: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
`;

function Sobre() {
  return (
    <Container>
      <Texto>
        <h2>Sobre a AL SKIN</h2>
        <h4>QUEM SOMOS</h4>
        <p>...</p>

        <h4>POR QUE EXISTIMOS?</h4>
        <p>...</p>

        <h4>O QUE A GENTE FAZ?</h4>
        <p>...</p>

        <Img src={sobre1} alt="Imagem gota" />
      </Texto>

      <Lateral>
        <Img src={sobre2} alt="Imagem tubo" />
        <div>
          <h4>VAMOS CONVERSAR?</h4>
          <p>...</p>
          <Botao>💬 Fale conosco</Botao>
        </div>
      </Lateral>
    </Container>
  );
}

export default Sobre;