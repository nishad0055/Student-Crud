import { createBrowserRouter } from "react-router-dom";
import Addstudent from "../components/Addstudent";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import EditDailog from "../components/EditDailog";
import Home from "../components/Home";
import StudentData from "../components/StudentData";
import Main from "../Layouts/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-student",
        element: (
          <PrivateRoute>
            <Addstudent></Addstudent>
          </PrivateRoute>
        ),
      },
      {
        path: "/student-data",
        element: (
          <PrivateRoute>
            <StudentData></StudentData>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/student-data"),
      },
      {
        path: "/edit/:id",
        element: (
          <PrivateRoute>
            <EditDailog></EditDailog>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/student-data/${params.id}`),
      },
    ],
  },
]);
