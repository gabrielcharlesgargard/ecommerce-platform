import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Your Cart is Empty
        </h1>
        <p className="mt-3 text-slate-600">Start shopping to add items here.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-2xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-900">Shopping Cart</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-28 w-28 rounded-2xl object-cover"
              />

              <div className="flex-1">
                <h2 className="text-lg font-semibold text-slate-900">
                  {item.name}
                </h2>
                <p className="text-sm text-slate-500">
                  ${item.price.toFixed(2)} each
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="rounded-xl border px-3 py-1 text-slate-700 hover:bg-slate-100"
                  >
                    -
                  </button>
                  <span className="min-w-8 text-center font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="rounded-xl border px-3 py-1 text-slate-700 hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 sm:items-end">
                <p className="text-lg font-bold text-slate-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-sm font-medium text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Order Summary</h2>

          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t pt-3 text-base font-bold text-slate-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="mt-6 w-full rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
            Proceed to Checkout
          </button>

          <button
            onClick={() => dispatch(clearCart())}
            className="mt-3 w-full rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100"
          >
            Clear Cart
          </button>
        </aside>
      </div>
    </section>
  );
}
