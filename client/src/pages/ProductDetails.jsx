import { Link, useParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import products from "../data/products";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Product not found</h1>
        <p className="mt-3 text-slate-600">
          The product you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 rounded-2xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </section>
    );
  }

  const inStock = product.stock > 0;

  const handleAddToCart = () => {
    dispatch( addToCart( product ) );
  };


  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
            {product.category}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-slate-500">⭐ {product.rating}</span>
          </div>

          <p className="mt-5 leading-7 text-slate-600">{product.description}</p>

          <div className="mt-6 flex items-center gap-3">
            <span
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                inStock
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {inStock ? `${product.stock} items in stock` : "Out of stock"}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={handleAddToCart}
              disabled={!inStock}
              className={`rounded-2xl px-5 py-3 text-sm font-semibold text-white transition ${
                inStock
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "cursor-not-allowed bg-slate-400"
              }`}
            >
              Add to Cart
            </button>

            <Link
              to="/"
              className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
