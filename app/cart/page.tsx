'use client';

import CartItemCard from '../../components/CartItemCard';
import React from 'react';
import { TotalPriceSelector } from '@/store/features/cartSlice';
import { useAppSelector } from '@/store/store';

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <div className="p-2">
      {cartItems.map((item) => (
        <CartItemCard key={item.product.id} cartItem={item} />
      ))}

      <div className="grid grid-cols-1 place-items-end pr-8 mr-8">
        <p className="text-slate-600">
          Total Price:{' '}
          <span className="text-slate-900 font-bold pr-8 mr-8">
            {totalPrice} $
          </span>
        </p>
      </div>
    </div>
  );
};

export default CartPage;
