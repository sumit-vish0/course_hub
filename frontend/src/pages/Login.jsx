import React, { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { UserProvider } from "../context/UserContext";

const Login = () => {
  const { login } = useContext(UserProvider);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, role } = formData;

    if (!role) {
      toast.error("Please select a role");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:5000/users?email=${email}&password=${password}&role=${role}`,
      );

      if (res.status === 200 && res.data.length > 0) {
        login(res.data[0]);

        toast.success("Login Successful");

        setFormData({
          email: "",
          password: "",
          role: "",
        });

        navigate("/");
      } else {
        toast.error("Invalid email, password, or role");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Login</h2>

            <p className="mt-2 text-sm text-gray-500">
              Welcome back to{" "}
              <span className="text-indigo-600 font-semibold">CourseHub</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white"
              />
            </div>
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white"
              />
            </div>
            {/* Role */}
            <div>
              <label className="mb-3 block text-sm font-semibold tracking-wide text-slate-700">
                Role
              </label>

              <div className="grid grid-cols-2 gap-4">
                {/* User */}
                <label className="group relative cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={formData.role === "user"}
                    onChange={handleChange}
                    className="peer sr-only"
                  />

                  <div className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/50 hover:shadow-md peer-checked:border-indigo-500 peer-checked:bg-gradient-to-br peer-checked:from-indigo-50 peer-checked:to-violet-50 peer-checked:text-indigo-700 peer-checked:shadow-lg peer-checked:shadow-indigo-100">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-300 transition-all duration-300 group-hover:border-indigo-400 peer-checked:border-indigo-500">
                      <span className="h-2.5 w-2.5 scale-0 rounded-full bg-indigo-500 transition-transform duration-200 peer-checked:scale-100" />
                    </span>

                    <span>User</span>
                  </div>
                </label>

                {/* Admin */}
                <label className="group relative cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={formData.role === "admin"}
                    onChange={handleChange}
                    className="peer sr-only"
                  />

                  <div className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/50 hover:shadow-md peer-checked:border-indigo-500 peer-checked:bg-gradient-to-br peer-checked:from-indigo-50 peer-checked:to-violet-50 peer-checked:text-indigo-700 peer-checked:shadow-lg peer-checked:shadow-indigo-100">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-300 transition-all duration-300 group-hover:border-indigo-400 peer-checked:border-indigo-500">
                      <span className="h-2.5 w-2.5 scale-0 rounded-full bg-indigo-500 transition-transform duration-200 peer-checked:scale-100" />
                    </span>

                    <span>Admin</span>
                  </div>
                </label>
              </div>
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3.5 text-base font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-200 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl active:translate-y-0"
            >
              Login
            </button>
          </form>

          {/* Bottom text */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't Have an Account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-indigo-600 cursor-pointer hover:text-indigo-700"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
