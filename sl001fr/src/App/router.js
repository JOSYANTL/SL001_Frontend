import React from "react";
import {createBrowserRouter} from "react-router-dom"
import App from "../App/App";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;