import React, { useEffect, useState } from 'react';
import { IProduct } from '../../service/productService';
import { productService } from '../../service/productService';
import ProductCard from '../ProductCard/ProductCard';
import './ProductShowcase.css';

type Props = {
  searchTerm?: string;
};

const ProductShowcase = ({ searchTerm }: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await productService.getProducts();
      setProducts(data);
    };
    fetch();
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm?.toLowerCase() ?? '')
  );

  return (
    <div className="showcase-container">
      <h2>Destaques</h2>
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filtered.length === 0 && <p>Nenhum produto encontrado.</p>}
      </div>
    </div>
  );
};

export default ProductShowcase;
