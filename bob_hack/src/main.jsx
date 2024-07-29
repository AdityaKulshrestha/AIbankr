import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Home from "./pages/Home.jsx";
import FinReport from "./pages/FinReport.jsx";
import Courses from "./pages/FinCourse.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/fin-report",
        element: <FinReport />,
      },
      {
        path: "/fin-course",
        element: <Courses />,
      },
      {
        path: "/module",
        element: <CoursePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
