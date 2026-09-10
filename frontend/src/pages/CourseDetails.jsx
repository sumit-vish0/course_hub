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
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-2xl font-bold text-indigo-400 ring-1 ring-indigo-500/20">
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
      <div className="mx-auto mb-6 max-w-7xl">
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

      {/* Main Card */}
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-2xl shadow-black/40">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[350px] overflow-hidden sm:min-h-[500px] lg:min-h-[650px]">
            <img
              src={courseData.cImg}
              alt={courseData.cName}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* Top Badges */}
            <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
              <span className="rounded-full border border-indigo-400/20 bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-300 backdrop-blur-md">
                {courseData.category || "Web Development"}
              </span>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/20 px-4 py-2 text-xs font-bold text-emerald-300 backdrop-blur-md">
                {courseData.status || "Active"}
              </span>
            </div>

            {/* Bottom Image Content */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-lg bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md">
                  {courseData.level || "Beginner"}
                </span>

                <span className="rounded-lg bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md">
                  {courseData.language || "English"}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-yellow-400">★</span>
                <span className="font-bold text-white">
                  {courseData.rating || "4.8"}
                </span>
                <span className="text-slate-400">
                  ({courseData.studentsEnrolled || 0} students)
                </span>
              </div>
            </div>
          </div>

          {/* Course Information */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            {/* Heading */}
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
                Course Details
              </span>

              <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {courseData.cName}
              </h1>
            </div>

            {/* Description */}
            <p className="mb-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              {courseData.cDescription}
            </p>

            {/* Rating */}
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
                <span className="text-lg text-yellow-400">★</span>

                <div>
                  <p className="text-sm font-bold text-white">
                    {courseData.rating || "4.8"} / 5
                  </p>

                  <p className="text-xs text-slate-500">Course Rating</p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
                <span className="text-lg">👥</span>

                <div>
                  <p className="text-sm font-bold text-white">
                    {courseData.studentsEnrolled || 0}+
                  </p>

                  <p className="text-xs text-slate-500">Students</p>
                </div>
              </div>
            </div>

            {/* Course Info Grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {/* Duration */}
              <div className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-indigo-500/5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-lg ring-1 ring-indigo-500/20">
                  ⏱
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Duration
                </p>

                <p className="mt-1 font-bold text-white">
                  {courseData.cDuration}
                </p>
              </div>

              {/* Trainer */}
              <div className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-lg ring-1 ring-purple-500/20">
                  👨‍🏫
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Trainer
                </p>

                <p className="mt-1 font-bold text-white">
                  {courseData.cTrainer}
                </p>
              </div>

              {/* Lessons */}
              <div className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-lg ring-1 ring-cyan-500/20">
                  📚
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Lessons
                </p>

                <p className="mt-1 font-bold text-white">
                  {courseData.lessons || 0} Lessons
                </p>
              </div>

              {/* Level */}
              <div className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-emerald-500/5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-lg ring-1 ring-emerald-500/20">
                  🎯
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Difficulty
                </p>

                <p className="mt-1 font-bold text-white">
                  {courseData.level || "Beginner"}
                </p>
              </div>
            </div>

            {/* Extra Course Features */}
            <div className="mt-6 flex flex-wrap gap-2">
              {courseData.certificate && (
                <span className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/50 px-3 py-2 text-xs font-semibold text-slate-300">
                  ✓ Certificate Included
                </span>
              )}

              <span className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/50 px-3 py-2 text-xs font-semibold text-slate-300">
                ✓ {courseData.language || "English"}
              </span>

              <span className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/50 px-3 py-2 text-xs font-semibold text-slate-300">
                ✓ Lifetime Access
              </span>
            </div>

            {/* Price */}
            <div className="mt-8 border-t border-slate-800 pt-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Course Price
                  </p>

                  <div className="flex items-center gap-3">
                    <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                      ₹{courseData.cPrice}
                    </p>

                    <span className="rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-400">
                      One Time
                    </span>
                  </div>
                </div>

                <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:from-indigo-400 hover:to-purple-500 hover:shadow-xl hover:shadow-indigo-500/25 active:translate-y-0">
                  Enroll Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/20 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-600" />

              <h2 className="text-2xl font-bold tracking-tight text-white">
                About This Course
              </h2>
            </div>

            <p className="text-sm leading-7 text-slate-400 sm:text-base">
              {courseData.cDescription}
            </p>
          </div>

          {/* Course Summary */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="mb-5 text-lg font-bold text-white">
              Course Summary
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-sm text-slate-500">Category</span>
                <span className="text-sm font-semibold text-slate-200">
                  {courseData.category || "Web Development"}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-sm text-slate-500">Level</span>
                <span className="text-sm font-semibold text-slate-200">
                  {courseData.level || "Beginner"}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-sm text-slate-500">Lessons</span>
                <span className="text-sm font-semibold text-slate-200">
                  {courseData.lessons || 0}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-sm text-slate-500">Language</span>
                <span className="text-sm font-semibold text-slate-200">
                  {courseData.language || "English"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Certificate</span>
                <span className="text-sm font-semibold text-emerald-400">
                  {courseData.certificate ? "Included ✓" : "Not Included"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You Will Get */}
      <div className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/20 sm:p-8 lg:p-10">
        <div className="mb-7">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
            Learning Experience
          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            What You Will Get
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
            <div className="mb-4 text-2xl">🎓</div>
            <h3 className="font-bold text-white">Certificate</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Get a certificate after successfully completing the course.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
            <div className="mb-4 text-2xl">💻</div>
            <h3 className="font-bold text-white">Practical Learning</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Practice concepts through real-world coding examples and projects.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
            <div className="mb-4 text-2xl">📖</div>
            <h3 className="font-bold text-white">Structured Lessons</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Follow a structured learning path designed for steady progress.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
            <div className="mb-4 text-2xl">🚀</div>
            <h3 className="font-bold text-white">Career Skills</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Build practical skills that can be applied to real development
              projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
