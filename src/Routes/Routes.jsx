import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Categories from "../Pages/Categories/Categories";
import Register from "../Pages/Register";
import Details from "../Pages/Details/Details";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        loader:()=>fetch('/news.json'),
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/category/:id",
        element: <Categories />,
      },
      {
        path: "/details/:id",
        loader:()=>fetch(`/news.json`),
        element: <PrivetRoute><Details /></PrivetRoute>
      },
    ],
  },
]);

export default Routes;
