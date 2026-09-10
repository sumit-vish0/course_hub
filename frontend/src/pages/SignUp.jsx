import React, { useState } from "react";
import { v4 as randomId } from "uuid";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate=useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Password validation
  if (formData.password !== formData.confirm_password) {
    toast.error("Passwords do not match");
    return;
  }

  // Role validation
  if (!formData.role) {
    toast.error("Please select a role");
    return;
  }

  try {
    // Check existing users
    const usersRes = await axios.get("http://localhost:5000/users");

    const existingUser = usersRes.data.find(
      (user) =>
        user.email.toLowerCase() === formData.email.toLowerCase() ||
        user.username.toLowerCase() === formData.username.toLowerCase()
    );

    if (existingUser) {
      toast.error("Username or email already exists");
      return;
    }

    // Don't send confirm_password to database
    const data = {
      id: randomId(),
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    };

    const res = await axios.post(
      "http://localhost:5000/users",
      data
    );

    if (res.status === 201) {
      toast.success("User Created Successfully");

      navigate("/login")

      setFormData({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        role: "",
      });
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Please try again.");
  }
};

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Create Account
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Join Course
              <span className="text-indigo-600 font-semibold">Hub</span> and
              start learning today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Username
              </label>

              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white"
              />
            </div>
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
            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirm_password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Confirm Password
              </label>

              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="Confirm password"
                required
                value={formData.confirm_password}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:bg-white ${
                  formData.confirm_password &&
                  formData.password !== formData.confirm_password
                    ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                }`}
              />

              {formData.confirm_password &&
                formData.password !== formData.confirm_password && (
                  <p className="mt-2 text-sm font-medium text-red-500">
                    Passwords do not match
                  </p>
                )}
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Role
              </label>

              <div className="flex gap-4">
                {/* User */}
                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={formData.role === "user"}
                    onChange={handleChange}
                    className="peer sr-only"
                  />

                  <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-700 font-medium transition-all duration-200 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:text-indigo-600 hover:bg-gray-100">
                    <span className="w-4 h-4 rounded-full border-2 border-gray-400 peer-checked:border-indigo-500"></span>
                    User
                  </div>
                </label>

                {/* Admin */}
                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={formData.role === "admin"}
                    onChange={handleChange}
                    className="peer sr-only"
                  />

                  <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-700 font-medium transition-all duration-200 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:text-indigo-600 hover:bg-gray-100">
                    <span className="w-4 h-4 rounded-full border-2 border-gray-400"></span>
                    Admin
                  </div>
                </label>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-2 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-base shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Create Account
            </button>
          </form>

          {/* Bottom text */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 cursor-pointer hover:text-indigo-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
