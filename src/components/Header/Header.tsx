'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { useCart } from '@/hooks/useCart';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function Header() {
  const { totalItems, setShowModal } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/">AL SKIN</Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">Sobre</Link>
        </nav>

        <div className={styles.actions}>
          <SearchBar />
          <button
            className={styles.cartBtn}
            onClick={() => setShowModal(true)}
            aria-label="Abrir carrinho"
          >
            🛒 <span className={styles.badge}>{totalItems}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
