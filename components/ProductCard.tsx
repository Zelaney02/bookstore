import Product from '@/interfaces/product.interface';
import Image from 'next/image';
import React from 'react';
import AddToCartBtn from './AddToCartButton';
import Link from 'next/link';

interface Props {
  product: Product;
}
const ProductCard = (props: Props) => {
  return (
    <div className="border rounded-md shadow hover:shadow-lg transition overflow-hidden ">
      <Link href={'/products/' + (props.product.id + 1)}>
        <Image
          src={props.product.imagePath}
          width={400}
          height={300}
          alt={props.product.title}
        />
      </Link>

      <div className="p-2">
        <h6 className="text-center text-slate-600">{props.product.title}</h6>
        <p className="text-center text-slate-600">{props.product.price} $</p>
        <AddToCartBtn product={props.product} />
      </div>
    </div>
  );
};

export default ProductCard;
