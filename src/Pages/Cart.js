import React from 'react';
import { useCart } from '../context/CartContext';
import { CartCard } from '../components/CartCard';
import { UseTitle } from '../hooks/UseTitle';

export const Cart = () => {
  const { cartList, removeFromCart,total } = useCart();
  UseTitle('Cart')

  return (
    <main>
      <section className='cart'>
        <h1>Cart Items : {cartList.length} / ${total.toFixed(2)}</h1>
      </section>
       <div className="cartContainer">
      {cartList.length === 0 ? (
        <p>No products in cart</p>
      ) : (
        cartList.map((product) => (
          <CartCard key={product.id} product={product} onRemove={removeFromCart} />
        ))
      )}
    </div>
    </main>
  );
};
