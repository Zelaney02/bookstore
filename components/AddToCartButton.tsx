'use client';

import Product from '../interfaces/product.interface';
import React from 'react';
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from '../store/features/cartSlice';

import { useAppDispatch, useAppSelector } from '../store/store';
import { Button } from './elements';
import QuantityButton from './QuantityButton';

interface Props {
  product: Product;
}

const AddToCartButton = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );
  const dispatch = useAppDispatch();
  if (!qty)
    return (
      <div className="flex justify-center">
        <Button onClick={() => dispatch(increment(props.product))}>
          Add To Cart
        </Button>
      </div>
    );
  return (
    <QuantityButton
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      qty={qty}
    />
  );
};

export default AddToCartButton;
