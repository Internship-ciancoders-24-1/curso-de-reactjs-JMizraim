import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// pages
import BadgesPage from "./pages/BadgesPage";
import NewBadgePage from "./pages/NewBadgePage";
import EditBadgePage from "./pages/EditBadgePage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "badges", element: <BadgesPage /> },
      { path: "badges/new", element: <NewBadgePage /> },
      { path: "badges/:badgeId/edit", element: <EditBadgePage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
