import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let CourseProvider = createContext();
const CourseContext = ({ children }) => {
  let [allCourses, setAllCourses] = useState(null); // [{} , {} , {}]

  let findById = (id) => {
    let data = allCourses?.find((el) => {
      return el.id == id;
    });
    return data;
  };

  let getAllCourses = async () => {
    let res = await axios.get("http://localhost:5000/courses");
    if (res.status == 200 && res.data.length > 0) {
      setAllCourses(res.data);
    }
  };

  let handleAddCourse = (courseData) => {
    setAllCourses([...allCourses, courseData]);
  };

  let deleteById = async (id) => {
    let filtered = allCourses?.filter((el) => el.id != id);
    setAllCourses(filtered);
    let res = await axios.delete(`http://localhost:5000/courses/${id}`);
    console.log(res);
  };
  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <CourseProvider.Provider
      value={{ allCourses, handleAddCourse, findById, deleteById }}
    >
      {children}
    </CourseProvider.Provider>
  );
};

export default CourseContext;
