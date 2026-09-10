import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import CourseList from './pages/CourseList'
import AddCourse from './pages/AddCourse'
import Cart from './pages/Cart'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import PageNotFound from './pages/PageNotFound'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  let Routings =createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<CourseList/>
      },
      {
        path:"/addcourse",
        element:<AddCourse/>
      },
      {
        path:"/coursedetails/:id",
        element:<CourseDetails/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/*",
        element:<PageNotFound/>
      },
    ]
  }])
  return (
    <RouterProvider router={Routings} ></RouterProvider>
  )
}

export default App