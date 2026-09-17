import React, { useContext, useState } from "react";
import { CourseProvider } from "../context/CourseContext";
import CourseCard from "../components/CourseCard";

const CourseList = () => {
  let [search, setSearch] = useState("");

  let { allCourses } = useContext(CourseProvider);

  let filterd = allCourses?.filter((course) => {
    return course.cName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-slate-950 px-5 py-12 sm:px-8">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search courses..."
        className="mx-auto mb-10 block w-full max-w-md rounded-xl border border-slate-700 bg-slate-900 px-5 py-3.5 text-sm text-white shadow-lg outline-none placeholder:text-slate-500 transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
      />{" "}
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400 ring-1 ring-indigo-500/20">
            Learn • Grow • Succeed
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Courses
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Upgrade your skills with carefully designed courses taught by
            experienced trainers.
          </p>
        </div>

        {/* Course Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {filterd?.map((course) => (
            <CourseCard key={course.id} data={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
