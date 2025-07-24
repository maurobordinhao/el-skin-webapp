import React from 'react';
import './ProductCard.css';
import { IProduct } from '../../service/productService';
import { useCart } from '../../contexts/CartContext';

type ProductCardProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">R$ {product.price.toFixed(2)}</p>
      <button className="buy-button" onClick={() => addToCart(product)}>
        Comprar
      </button>
    </div>
  );
};

export default ProductCard;
