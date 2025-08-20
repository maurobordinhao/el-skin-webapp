'use client';
import React, { useEffect } from 'react';
import styles from './CartModal.module.css';
import { useCart } from '@/hooks/useCart';

const IMG_PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

type Props = { onClose: () => void };

export default function CartModal({ onClose }: Props) {
  const { cart, updateQuantity, removeFromCart, showModal } = useCart();

  // Fecha automaticamente quando carrinho zera
  useEffect(() => {
    if (showModal && cart.length === 0) onClose();
  }, [cart.length, showModal, onClose]);

  if (!showModal) return null;

  const totalGeral = cart.reduce(
    (acc, item) => acc + item.price * item.quantidade,
    0
  );

  return (
    // Fecha ao clicar fora
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <aside className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <button className={styles.close} onClick={onClose} aria-label="Fechar">
            &times;
          </button>

          <h2>Seu Carrinho</h2>

          {cart.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <>
              <ul className={styles.list}>
                {cart.map((item) => (
                  <li key={item.id} className={styles.item}>
                    <img
                      src={item.image || IMG_PLACEHOLDER}
                      alt={item.name}
                      className={styles.thumb}
                    />
                    <div>
                      <p>
                        {item.name} <br />
                        R$ {item.price.toFixed(2)} x {item.quantidade} ={' '}
                        <strong>
                          R$ {(item.price * item.quantidade).toFixed(2)}
                        </strong>
                      </p>

                      <div className={styles.qty}>
                        <button
                          onClick={() =>
                            item.quantidade <= 1
                              ? removeFromCart(item.id)
                              : updateQuantity(item.id, item.quantidade - 1)
                          }
                          aria-label="Diminuir quantidade"
                        >
                          -
                        </button>
                        <span>{item.quantidade}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantidade + 1)}
                          aria-label="Aumentar quantidade"
                        >
                          +
                        </button>
                      </div>

                      <button
                        className={styles.remove}
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remover
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={styles.total}>
                <strong>Total:</strong> R$ {totalGeral.toFixed(2)}
              </div>

              <button className={styles.checkout}>Finalizar Compra</button>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
