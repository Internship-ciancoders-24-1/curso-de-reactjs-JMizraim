import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Badges from "./pages/Badges";
import NewBadge from "./pages/NewBadge";

const router = createBrowserRouter([
  { path: "/badges", element: <Badges /> },
  { path: "/badges/new", element: <NewBadge /> },
    { path: "*", element: <h1>Not Found</h1> },
]);

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
