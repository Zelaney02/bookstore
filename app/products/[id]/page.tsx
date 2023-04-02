import Image from 'next/image';
import { MockProducts } from '@/mockdata';
import AddToCartBtn from '@/components/AddToCartButton';

export default function Product({ params }: { params: { id: number } }) {
  const product = MockProducts[params.id - 1];

  return (
    <main>
      <div className="max-w-sm w-full lg:max-w-full lg:flex py-1">
        <Image
          className="flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          src={product.imagePath}
          width={400}
          height={300}
          alt={product.title}
        />

        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {product.title}

              <div className="flex items-center pl-8">
                <Image
                  className="w-10 h-10 rounded-full mr-4"
                  width={50}
                  height={50}
                  src={product.imagePath}
                  alt={product.author}
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{product.author}</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-base pt-8">
              {product.description}
            </p>
          </div>

          <div className="mb-8">
            <div className="text-gray-900 font-bold mb-2">
              Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
              {product.price}
            </div>
            <div className="text-gray-900 font-bold mb-8">
              Quantity: {product.quantity}
            </div>
            <div className="mb-2 flex">
              <AddToCartBtn product={product} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
