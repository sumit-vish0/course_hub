 import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-slate-800 bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">

        {/* Main Footer Content */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">

            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Course
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Hub
                </span>
              </h2>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              Learn new skills, build your career, and achieve your goals with
              high-quality courses designed for modern learners.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-sm font-bold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-sm font-bold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-sm font-bold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-sm font-bold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400"
              >
                ▶
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">

              <li>
                <Link
                  to="/"
                  className="text-slate-400 transition-colors duration-200 hover:text-indigo-400"
                >
                  Courses
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-400 transition-colors duration-200 hover:text-indigo-400"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-400 transition-colors duration-200 hover:text-indigo-400"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-400 transition-colors duration-200 hover:text-indigo-400"
                >
                  Become an Instructor
                </a>
              </li>

            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Popular Courses
            </h3>

            <ul className="mt-5 space-y-3 text-sm">

              <li>
                <a
                  href="#"
                  className="text-slate-400 transition-colors duration-200 hover:text-indigo-400"
                >
                  Python Programming
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-400 transition-colors duration-200 hover:text-indigo-400"
                >
                  React Development
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-400 transition-colors duration-200 hover:text-indigo-400"
                >
                  Full Stack Development
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-400 transition-colors duration-200 hover:text-indigo-400"
                >
                  Generative AI
                </a>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Get updates about new courses, learning resources, and exclusive
              offers.
            </p>

            <div className="mt-5 flex overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-1 focus-within:border-indigo-500/50">

              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-500"
              />

              <button
                type="button"
                className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-indigo-500/10 transition-all duration-300 hover:from-indigo-400 hover:to-purple-500"
              >
                Join
              </button>

            </div>

            <p className="mt-3 text-xs text-slate-500">
              We respect your privacy. No spam.
            </p>

          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p className="text-sm text-slate-500">
            © 2026{" "}
            <span className="font-semibold text-slate-400">
              CourseHub
            </span>
            . All rights reserved.
          </p>

          <div className="flex justify-center gap-6 text-sm sm:justify-end">

            <a
              href="#"
              className="text-slate-500 transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-slate-500 transition-colors hover:text-slate-300"
            >
              Terms of Service
            </a>

          </div>

        </div>

        {/* Made With */}
        <div className="mt-6 text-center">

          <p className="text-xs text-slate-600">
            Built for learners who want to{" "}
            <span className="font-semibold text-indigo-400">
              Learn • Grow • Succeed
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
