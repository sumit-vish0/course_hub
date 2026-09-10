import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserProvider } from "../context/UserContext";
import { CourseProvider } from "../context/CourseContext";

const CourseCard = ({ data }) => {
  let { user } = useContext(UserProvider);
  let { deleteById } = useContext(CourseProvider);

  return (
    <div className="group w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 sm:w-[350px]">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={data.cImg}
          alt={data.cName}
          className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

        {/* Duration */}
        <span className="absolute right-4 top-4 rounded-lg border border-white/10 bg-slate-950/75 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
          {data.cDuration}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Course Name */}
        <h2 className="line-clamp-1 text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-indigo-400">
          {data.cName}
        </h2>

        {/* Description */}
        <p className="mt-3 min-h-[48px] line-clamp-2 text-sm leading-6 text-slate-400">
          {data.cDescription}
        </p>

        {/* Trainer */}
        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/20">
            {data.cTrainer?.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Instructor
            </p>

            <p className="truncate text-sm font-semibold text-slate-200">
              {data.cTrainer}
            </p>
          </div>
        </div>

        {/* Price + Buttons */}
        <div className="mt-6 border-t border-slate-800 pt-5">
          {/* Price */}
          <div className="mb-5">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Course Price
            </p>

            <span className="text-2xl font-extrabold tracking-tight text-indigo-400">
              ₹{data.cPrice}
            </span>
          </div>

          {/* USER */}
          {user?.role === "user" && (
            <Link
              to={`/coursedetails/${data.id}`}
              className="block w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-purple-500 hover:shadow-xl hover:shadow-indigo-500/25 active:translate-y-0"
            >
              View Course
            </Link>
          )}

          {/* ADMIN */}
          {user?.role === "admin" && (
            <div className="flex gap-3">
              <Link
                to={`/updatecourse/${data.id}`}
                className="flex-1 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-500 hover:shadow-lg hover:shadow-indigo-500/20 active:translate-y-0"
              >
                Update
              </Link>

              <button
                onClick={() => deleteById(data.id)}
                className="flex-1 rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm font-semibold text-slate-200 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400 hover:shadow-lg hover:shadow-red-500/10 active:translate-y-0"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
