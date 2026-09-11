import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { CourseProvider } from "../context/CourseContext";

const UpdateCourse = () => {
  let { id } = useParams();

  let navigate = useNavigate();
  let { findById, handleUpdateCourse } = useContext(CourseProvider);
  let [courseDetails, setCourseDetails] = useState({
    cName: "",
    cPrice: "",
    cImg: "",
    cTrainer: "",
    cDuration: "",
    cDescription: "",
  });

  useEffect(() => {
    setCourseDetails(findById(id));
  }, [id]);

  let { cName, cPrice, cImg, cTrainer, cDuration, cDescription } =
    courseDetails;

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCourseDetails({ ...courseDetails, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    let res = await axios.put(
      `http://localhost:5000/courses/${id}`,
      courseDetails,
    );

    if (res.status == 200) {
      toast.success("Update Successfully");
      handleUpdateCourse(res.data);
      
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-indigo-600">
              Course Management
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Update The COurse{" "}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-500">
            Create a new course and share your knowledge with learners.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-indigo-100/50 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Course Name */}
            <div>
              <label
                htmlFor="cName"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Course Name
              </label>

              <input
                type="text"
                id="cName"
                placeholder="Enter course name"
                name="cName"
                value={cName}
                required
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            {/* Price + Duration */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Price */}
              <div>
                <label
                  htmlFor="cPrice"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Course Price
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-gray-500">
                    ₹
                  </span>

                  <input
                    type="number"
                    id="cPrice"
                    placeholder="Enter price"
                    name="cPrice"
                    value={cPrice}
                    required
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-9 pr-4 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label
                  htmlFor="cDuration"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Course Duration
                </label>

                <input
                  type="text"
                  id="cDuration"
                  placeholder="e.g. 6 weeks"
                  name="cDuration"
                  required
                  value={cDuration}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Trainer */}
            <div>
              <label
                htmlFor="cTrainer"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Trainer Name
              </label>

              <input
                type="text"
                id="cTrainer"
                placeholder="Enter trainer name"
                name="cTrainer"
                required
                value={cTrainer}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            {/* Course Image */}
            <div>
              <label
                htmlFor="cImg"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Course Image URL
              </label>

              <input
                type="text"
                id="cImg"
                placeholder="https://example.com/course-image.jpg"
                name="cImg"
                value={cImg}
                required
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="cDescription"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Course Description
              </label>

              <textarea
                id="cDescription"
                name="cDescription"
                value={cDescription}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Write a short description about your course..."
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              ></textarea>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100"></div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3.5 text-base font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-200 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl active:translate-y-0"
            >
              Update Course
            </button>
          </form>
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Make sure all course information is accurate before submitting.
        </p>
      </div>
    </div>
  );
};

export default UpdateCourse;
