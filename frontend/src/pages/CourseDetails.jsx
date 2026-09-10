import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CourseProvider } from "../context/CourseContext";

const CourseDetails = () => {
  let navigate = useNavigate();
  const [courseData, setCourseData] = useState(null);

  const { findById } = useContext(CourseProvider);
  const { id } = useParams();

  useEffect(() => {
    setCourseData(findById(id));
  }, [id, findById]);

  if (!courseData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center shadow-2xl shadow-black/30">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-2xl text-indigo-400 ring-1 ring-indigo-500/20">
            !
          </div>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-white">
            Course Not Found
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            The course you're looking for may have been removed or is no longer
            available.
          </p>

          <button
            onClick={() => navigate(-1)}
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-purple-500 hover:shadow-xl hover:shadow-indigo-500/20 active:translate-y-0"
          >
            ← Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
      {/* Back Button */}
      <div className="mx-auto mb-6 max-w-6xl">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-2.5 text-sm font-semibold text-slate-300 shadow-sm transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          Back to Courses
        </Link>
      </div>

      {/* Main Details Card */}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/30">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Course Image */}
          <div className="relative h-[300px] sm:h-[420px] lg:h-full lg:min-h-[560px]">
            <img
              src={courseData.cImg}
              alt={courseData.cName}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-300 shadow-lg backdrop-blur-md">
                Featured Course
              </span>
            </div>
          </div>

          {/* Course Information */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <span className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
              Course Details
            </span>

            <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {courseData.cName}
            </h1>

            <p className="mb-8 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              {courseData.cDescription}
            </p>

            {/* Course Info */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Duration */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors duration-200 hover:border-indigo-500/30">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Duration
                </p>

                <p className="font-bold text-indigo-400">
                  ⏱ {courseData.cDuration}
                </p>
              </div>

              {/* Trainer */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors duration-200 hover:border-purple-500/30">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Trainer
                </p>

                <p className="font-bold text-purple-400">
                  👨‍🏫 {courseData.cTrainer}
                </p>
              </div>
            </div>

            {/* Price Section */}
            <div className="mt-8 flex flex-col gap-5 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Course Price
                </p>

                <p className="text-3xl font-extrabold tracking-tight text-indigo-400">
                  ₹{courseData.cPrice}
                </p>
              </div>

              <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:from-indigo-400 hover:to-purple-500 hover:shadow-xl hover:shadow-indigo-500/25 active:translate-y-0">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto mt-8 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/20 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-600" />

          <h2 className="text-2xl font-bold tracking-tight text-white">
            About This Course
          </h2>
        </div>

        <p className="text-sm leading-7 text-slate-400 sm:text-base">
          {courseData.cDesc}
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;
