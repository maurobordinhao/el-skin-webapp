import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 16px;
`;

export const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 8px;
`;

export const CurrentPrice = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: #8a2be2;
`;

export const OriginalPrice = styled.span`
  font-size: 0.9rem;
  color: #999;
  text-decoration: line-through;
`;

export const AddToCartButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 16px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8a2be2;
  }
`;