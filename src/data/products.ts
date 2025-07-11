import produto1 from '../assets/products/produto1.png'; 
import produto2 from '../assets/products/produto2.png'; 
import produto3 from '../assets/products/produto3.png'; 
import produto4 from '../assets/products/produto4.png'; 
import produto5 from '../assets/products/produto5.png';
import produto6 from '../assets/products/produto6.png';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number; // Preço original, se estiver em promoção
  image: string;
}

// Catálogo de produtos exemplo
export const products: Product[] = [
  {
    id: 'p1',
    name: 'Esfoliante corporal',
    price: 39.90,
    originalPrice: 59.90,
    image: produto1,
  },
  {
    id: 'p2',
    name: 'Mascara de argila',
    price: 45.50,
    image: produto2,
  },
  {
    id: 'p3',
    name: 'Gel para cabelo',
    price: 25.50,
    image: produto3,
  },
  {
    id: 'p4',
    name: 'Óleo de Banho',
    price: 25.00,
    originalPrice: 50.00,
    image: produto4,
  },
  {
    id: 'p5',
    name: 'Creme hidradante',
    price: 50.00,
    image: produto5,
  },
  {
    id: 'p6',
    name: 'Protetor Solar',
    price: 20.00,
    image: produto6,
  },
];