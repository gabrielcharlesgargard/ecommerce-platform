import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Featured Products
          </h2>
          <p className="mt-2 text-slate-600">
            Explore a curated list of products for your store demo.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
