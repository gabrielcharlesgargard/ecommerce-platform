export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} ShopNest. Built with MERN Stack.
      </div>
    </footer>
  );
}
