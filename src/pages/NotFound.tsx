// src/pages/NotFound.tsx
import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: #d9534f;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h2>404 - Página não encontrada</h2>
      <p>A página não existe.</p>
    </NotFoundContainer>
  );
};

export default NotFound;
