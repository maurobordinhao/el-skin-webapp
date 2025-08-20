'use client';
import CartModal from '@/components/CartModal/CartModal';
import { useCart } from '@/hooks/useCart';

export default function CartHost() {
  const { showModal, setShowModal } = useCart();
  if (!showModal) return null;
  return <CartModal onClose={() => setShowModal(false)} />;
}
