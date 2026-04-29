import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const linkClass = ({ isActive }) =>
  isActive
    ? "text-blue-600 font-semibold"
    : "text-slate-700 hover:text-blue-600 transition";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="border-b bg-white/90 backdrop-blur">
      <div className="mix-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-xl font-bold text-blue-900">
          Geek<span className="text-blue-500">Shop</span>
        </NavLink>

        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/login" className={linkClass}>
            Login
          </NavLink>
          <NavLink to="/register" className={linkClass}>
            Register
          </NavLink>
          
          <Link
            to="/cart"
            className="relative rounded-xl bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200"
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
