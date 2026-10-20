import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../context/CartContext";

const Payment = () => {
  const { cart, totalPrice, clearCart } = useContext(CartProvider);

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paidAmount, setPaidAmount] = useState(0);

  const handlePayment = () => {
    setIsProcessing(true);

    // Frontend-only payment simulation
    setTimeout(() => {
      // Save the amount before clearing the cart
      setPaidAmount(totalPrice);

      // Payment successful → clear the cart
      clearCart();

      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  // Empty cart
  if (cart.length === 0 && !paymentSuccess) {
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
            Add a course to your cart before proceeding to payment.
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

  // Payment success
  if (paymentSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl">
          {/* Success Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-4xl text-emerald-400">
            ✓
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-white">
            Payment Successful
          </h1>

          <p className="mt-3 text-slate-400">
            Your payment has been completed successfully.
          </p>

          {/* Payment Details */}
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <p className="text-sm text-slate-500">Transaction ID</p>

            <p className="mt-1 font-mono text-sm font-semibold text-indigo-400">
              TXN-{Date.now()}
            </p>

            <div className="mt-4 flex justify-between border-t border-slate-800 pt-4">
              <span className="text-slate-400">Amount Paid</span>

              <span className="font-bold text-white">₹{paidAmount}</span>
            </div>
          </div>

          <Link
            to="/"
            className="mt-7 inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Continue Learning
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
            Secure Checkout
          </span>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white">
            Complete Your Purchase
          </h1>

          <p className="mt-2 text-slate-400">
            Choose your preferred payment method and complete your order.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Payment Section */}

          <div className="space-y-6 lg:col-span-2">
            {/* Contact Information */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
              <h2 className="text-xl font-bold text-white">
                Contact Information
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {/* Full Name */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
                  />
                </div>

                {/* Email */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
              <h2 className="text-xl font-bold text-white">Payment Method</h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {/* UPI */}

                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  className={`rounded-xl border p-4 text-left transition ${
                    paymentMethod === "upi"
                      ? "border-indigo-500 bg-indigo-500/10"
                      : "border-slate-700 bg-slate-950 hover:border-slate-600"
                  }`}
                >
                  <div className="text-2xl">📱</div>

                  <p className="mt-2 font-semibold text-white">UPI</p>

                  <p className="mt-1 text-xs text-slate-500">
                    Google Pay, PhonePe
                  </p>
                </button>

                {/* Card */}

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`rounded-xl border p-4 text-left transition ${
                    paymentMethod === "card"
                      ? "border-indigo-500 bg-indigo-500/10"
                      : "border-slate-700 bg-slate-950 hover:border-slate-600"
                  }`}
                >
                  <div className="text-2xl">💳</div>

                  <p className="mt-2 font-semibold text-white">Card</p>

                  <p className="mt-1 text-xs text-slate-500">
                    Credit or Debit Card
                  </p>
                </button>

                {/* Net Banking */}

                <button
                  type="button"
                  onClick={() => setPaymentMethod("netbanking")}
                  className={`rounded-xl border p-4 text-left transition ${
                    paymentMethod === "netbanking"
                      ? "border-indigo-500 bg-indigo-500/10"
                      : "border-slate-700 bg-slate-950 hover:border-slate-600"
                  }`}
                >
                  <div className="text-2xl">🏦</div>

                  <p className="mt-2 font-semibold text-white">Net Banking</p>

                  <p className="mt-1 text-xs text-slate-500">All major banks</p>
                </button>
              </div>

              {/* UPI Form */}

              {paymentMethod === "upi" && (
                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-slate-400">
                    UPI ID
                  </label>

                  <input
                    type="text"
                    placeholder="example@upi"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
                  />

                  <p className="mt-2 text-xs text-slate-500">
                    Enter your UPI ID to continue with the payment.
                  </p>
                </div>
              )}

              {/* Card Form */}

              {paymentMethod === "card" && (
                <div className="mt-6 space-y-4">
                  {/* Card Number */}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-400">
                      Card Number
                    </label>

                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Expiry */}

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-400">
                        Expiry Date
                      </label>

                      <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength="5"
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
                      />
                    </div>

                    {/* CVV */}

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-400">
                        CVV
                      </label>

                      <input
                        type="password"
                        placeholder="•••"
                        maxLength="3"
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Cardholder Name */}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-400">
                      Cardholder Name
                    </label>

                    <input
                      type="text"
                      placeholder="Name on card"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
                    />
                  </div>
                </div>
              )}

              {/* Net Banking */}

              {paymentMethod === "netbanking" && (
                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-slate-400">
                    Select Bank
                  </label>

                  <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-indigo-500">
                    <option>Select your bank</option>

                    <option>State Bank of India</option>

                    <option>HDFC Bank</option>

                    <option>ICICI Bank</option>

                    <option>Axis Bank</option>

                    <option>Kotak Mahindra Bank</option>
                  </select>
                </div>
              )}

              {/* Security Notice */}

              <div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4">
                <span className="text-xl">🔒</span>

                <p className="text-xs leading-5 text-slate-400">
                  Your payment information is securely processed. This is a
                  frontend demo and does not process real payments.
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary */}

          <div className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
            <h2 className="text-xl font-bold text-white">Order Summary</h2>

            {/* Courses */}

            <div className="mt-6 space-y-4">
              {cart.map((course) => (
                <div key={course.id} className="flex gap-3">
                  <img
                    src={course.cImg}
                    alt={course.cName}
                    className="h-16 w-20 rounded-lg object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 text-sm font-semibold text-white">
                      {course.cName}
                    </h3>

                    <p className="mt-1 text-sm font-bold text-indigo-400">
                      ₹{course.cPrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Details */}

            <div className="mt-6 space-y-4 border-t border-slate-800 pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Courses</span>

                <span className="font-semibold text-white">{cart.length}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Subtotal</span>

                <span className="font-semibold text-white">₹{totalPrice}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Tax</span>

                <span className="font-semibold text-emerald-400">Included</span>
              </div>
            </div>

            {/* Total */}

            <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-6">
              <span className="text-lg font-bold text-white">Total</span>

              <span className="text-2xl font-extrabold text-indigo-400">
                ₹{totalPrice}
              </span>
            </div>

            {/* Pay Button */}

            <button
              type="button"
              onClick={handlePayment}
              disabled={isProcessing}
              className="mt-7 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isProcessing ? "Processing Payment..." : `Pay ₹${totalPrice}`}
            </button>

            <p className="mt-4 text-center text-xs text-slate-500">
              🔒 Secure checkout • Frontend Demo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
