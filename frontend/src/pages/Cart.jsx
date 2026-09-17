import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useContext(CartProvider);

  if (cart.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-500/10 text-4xl">
            🛒
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-white">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            You haven't added any courses to your cart yet.
          </p>

          <Link
            to="/"
            className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}

        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            Shopping Cart
          </span>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white">
            Your Courses
          </h1>

          <p className="mt-2 text-slate-400">
            Review the courses you've selected.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}

          <div className="space-y-5 lg:col-span-2">
            {cart.map((course) => (
              <div
                key={course.id}
                className="flex flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl sm:flex-row"
              >
                {/* Image */}

                <img
                  src={course.cImg}
                  alt={course.cName}
                  className="h-48 w-full rounded-xl object-cover sm:h-32 sm:w-48"
                />

                {/* Details */}

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {course.cName}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                      {course.cDescription}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-xl font-extrabold text-indigo-400">
                      ₹{course.cPrice}
                    </p>

                    <button
                      onClick={() => removeFromCart(course.id)}
                      className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/20"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}

          <div className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
            <h2 className="text-xl font-bold text-white">Order Summary</h2>

            <div className="mt-6 space-y-4 border-b border-slate-800 pb-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Courses</span>

                <span className="font-semibold text-white">{cart.length}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Subtotal</span>

                <span className="font-semibold text-white">₹{totalPrice}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-lg font-bold text-white">Total</span>

              <span className="text-2xl font-extrabold text-indigo-400">
                ₹{totalPrice}
              </span>
            </div>

            <button className="mt-7 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-purple-500">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
