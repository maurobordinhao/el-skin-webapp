'use client';

import Carousel from '@/components/Carousel/Carousel';
import ProductShowcase from '@/components/ProductShowcase/ProductShowcase';
import { useCart } from '@/hooks/useCart';
import type { IProduct } from '@/service/productService';

export default function HomePage() {
  const { addToCart, setShowModal } = useCart();

  const handleAddToCart = (p: IProduct) => {
    addToCart({ id: p.id, name: p.name, price: p.price, image: p.image, quantidade: 1 });
    setShowModal(true);
  };

  return (
    <main>
      <Carousel />
      <ProductShowcase onAddToCart={handleAddToCart} />
    </main>
  );
}
