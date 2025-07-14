import React from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  tags: string[];
  price: string;
}

const ProductCard = ({ image, name, description, tags, price }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      
      <div className="card-info">
        <h3>{name}</h3>
        <p>{description}</p>

        <div className="tag-container">
          {tags.map((tag, i) => (
            <span key={i} className={`tag ${tag.toLowerCase()}`}>{tag}</span>
          ))}
        </div>

        <div className="bottom-section">
          <span className="price">{price}</span>
          <button className="buy-button">
            comprar <FontAwesomeIcon icon={faShoppingBag} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
