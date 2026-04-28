import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const inStock = product.stock > 0;

  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-slate-500">
              ⭐ {product.rating} ·{" "}
              {inStock ? `${product.stock} in stock` : "Out of stock"}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              inStock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {inStock ? "Available" : "Sold Out"}
          </span>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
