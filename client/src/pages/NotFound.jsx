import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-5xl font-bold text-slate-900">404</h1>
      <p className="mt-4 text-slate-600">Page not found.</p>
      <Link
        to="/"
        className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
      >
        Go Home
      </Link>
    </section>
  );
}
