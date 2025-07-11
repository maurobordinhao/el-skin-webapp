import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #f8f9fa; /* Um cinza bem claro */
  padding: 40px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  border-top: 1px solid #e7e7e7;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px; /* Espaço entre os ícones */
`;

export const SocialIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #6c757d; /* Cinza escuro para o fundo do ícone */
  color: #ffffff; /* Cor do ícone */
  font-size: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8a2be2; /* Cor roxa ao passar o mouse */
  }
`;

export const LinksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px; /* Espaço entre as colunas */
  width: 100%;
  max-width: 960px; /* Limita a largura para telas grandes */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas menores */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 coluna em telas muito pequenas */
    text-align: center;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 15px 0;
  padding-bottom: 5px;
  border-bottom: 2px solid #e0e0e0;
  text-transform: uppercase;
  color: #333;
`;

export const FooterLink = styled.a`
  color: #555;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
    color: #000;
  }
`;