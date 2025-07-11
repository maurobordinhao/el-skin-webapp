import styled from 'styled-components';

export const ShowcaseContainer = styled.section`
  padding: 40px 5%;
  background-color: #f9f9f9;
`;

export const ShowcaseTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
`;

// A grade de produtos!
export const ProductGrid = styled.div`
  display: grid;
  /* Cria colunas responsivas: elas terão no mínimo 250px de largura
     e se ajustarão para preencher o espaço (1fr). */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px; /* Espaçamento entre os cards */
`;