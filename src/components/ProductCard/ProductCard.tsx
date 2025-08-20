'use client';

import React from 'react';
import styles from './ProductCard.module.css';
import type { IProduct } from '@/service/productService';

const IMG_PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

type Props = {
  product: IProduct;
  onAddToCart: (product: IProduct) => void;
};

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={product.image || IMG_PLACEHOLDER}
        alt={product.name}
        loading="lazy"
      />
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
      <button
        className={styles.button}
        onClick={() => onAddToCart(product)}
        aria-label={`Adicionar ${product.name} ao carrinho`}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
