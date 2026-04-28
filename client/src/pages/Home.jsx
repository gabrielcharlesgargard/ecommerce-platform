import ProductGrid from "../components/product/ProductGrid";
import products from "../data/products";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-10 text-white shadow-sm">
          <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
            Build a modern e-commerce experience with MERN Stack
          </h1>
          <p className="mt-4 max-w-2xl text-slate-200">
            Browse products, manage accounts, and scale your store with a clean
            and professional UI.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Shop Now
            </a>
            <a
              href="/register"
              className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Create Account
            </a>
          </div>
        </div>
      </section>

      <div id="products">
        <ProductGrid products={products} />
      </div>
    </>
  );
}
