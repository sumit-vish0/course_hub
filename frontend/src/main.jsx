import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {Toaster} from "react-hot-toast"
import UserContext from "./context/UserContext.jsx";
import CourseContext from "./context/CourseContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserContext>
    <CourseContext>
  <Toaster/>
    <App />
    </CourseContext>
  </UserContext>
);
