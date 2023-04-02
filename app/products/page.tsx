import ProductCard from '@/components/ProductCard';
import { MockProducts } from '@/mockdata';

export default function Products() {
  return (
    <main>
      <div className="p-4 flex flex-wrap gap-4">
        {MockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
