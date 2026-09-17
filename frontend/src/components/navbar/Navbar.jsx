import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserProvider } from "../../context/UserContext";
import { CartProvider } from "../../context/CartContext";

const Navbar = () => {
  const { user, logout } = useContext(UserProvider);
  const { cart } = useContext(CartProvider);

  return (
    <div className="flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-sm backdrop-blur-md">
      {/* Course */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `group flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
            isActive
              ? "bg-indigo-100 text-indigo-600"
              : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
          }`
        }
      >
        <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
          Course
        </span>
      </NavLink>

      {/* Admin only */}
      {user?.role === "admin" && (
        <NavLink
          to="/addcourse"
          className={({ isActive }) =>
            `group flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-indigo-100 text-indigo-600"
                : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            }`
          }
        >
          <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
            Add Course
          </span>
        </NavLink>
      )}

      {/* User only */}
      {user?.role === "user" && (
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `group flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-indigo-100 text-indigo-600"
                : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            }`
          }
        >
          <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
            Cart
          </span>

          {cart.length > 0 && (
            <span className="ml-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1.5 text-xs font-bold text-white">
              {cart.length}
            </span>
          )}
        </NavLink>
      )}

      {/* Not logged in */}
      {!user && (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `ml-1 rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 ${
              isActive
                ? "bg-indigo-800 shadow-lg"
                : "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-indigo-200/60 hover:-translate-y-0.5 hover:from-indigo-700 hover:via-violet-700 hover:to-purple-700 hover:shadow-lg hover:shadow-indigo-300/50 active:translate-y-0"
            }`
          }
        >
          Login
        </NavLink>
      )}

      {/* Logged in */}
      {user && (
        <>
          {/* User Avatar */}
          <span className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-md shadow-indigo-200 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            {user.username.charAt(0).toUpperCase()}
          </span>

          {/* Logout */}
          <Link
            to="/login"
            onClick={logout}
            className="group ml-1 flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:via-violet-700 hover:to-purple-700 hover:shadow-lg hover:shadow-indigo-300/50 active:translate-y-0"
          >
            <span>Logout</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
