import React from 'react';
import { Button } from './elements';

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QuantityButton = (props: Props) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Button variant="danger" className="w-12 h-10" onClick={props.onDecrease}>
        {props.qty === 1 ? <i className="fa-solid fa-trash"></i> : '-'}
      </Button>
      <p>{props.qty}</p>
      <Button
        className="w-12 h-10"
        variant="success"
        onClick={props.onIncrease}
      >
        +
      </Button>
    </div>
  );
};

export default QuantityButton;
