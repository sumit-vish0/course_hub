import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import CourseList from "./pages/CourseList";
import AddCourse from "./pages/AddCourse";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import CourseDetails from "./pages/CourseDetails";
import ProtectedRoute from "./routes/ProtectedRoute";
import PrivateRoute from "./routes/PrivateRoute";
import UpdateCourse from "./pages/UpdateCourse";

const App = () => {
  let Routings = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <CourseList />,
        },
        {
          path: "/addcourse",
          element: (
            <PrivateRoute>
              <AddCourse />
            </PrivateRoute>
          ),
        },
        {
          path: "/course/:id",
          element: (
            <ProtectedRoute>
              <CourseDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "/update/:id",
          element: (
            <ProtectedRoute>
              <UpdateCourse />
            </ProtectedRoute>
          ),
        },

        {
          path: "/cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={Routings}></RouterProvider>;
};

export default App;
