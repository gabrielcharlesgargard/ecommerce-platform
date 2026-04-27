import { NavLink } from "react-router-dom";

const linkClass = ( { isActive } ) =>
    isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-700 hover:text-blue-600 transition";

export default function Navbar() {
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
                </nav>
            </div>
        </header>
    );
}