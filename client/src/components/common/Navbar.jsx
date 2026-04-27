import { NavLink } from "react-router-dom";

const linkClass = ( { isActive } ) =>
    isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-700 hover:text-blue-600 transition";

export default function Navbar() {
    return (
        <header className="border-b bg-white/90 backdrop-blur">
            <div className="mix-auto flex max-w-7xl items-center justify-between px-4 py-4">"></div>
        </header>
    )