import { createBrowserRouter } from "react-router-dom";
import Addstudent from "../components/Addstudent";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import Home from "../components/Home";
import StudentData from "../components/StudentData";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
      },
      {
        path: "/add-student",
        element: <Addstudent></Addstudent>,
      },
      {
        path: "/student-data",
        element: <StudentData></StudentData>,
      },
    ],
  },
]);
