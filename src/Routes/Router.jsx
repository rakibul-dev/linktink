import { createBrowserRouter, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import HomePage from "../Pages/HomePage";

// Error pages
import PageNotFound from "../Pages/Error/PageNotFound";
import LoginPage from "../Pages/Auth/LoginPage";

// User pages
import UserDashboard from "../Layouts/UserDashboard";
import ProjectListing from "../Pages/UserDashboard/ProjectListing";
import ProjectAnalytics from "../Pages/UserDashboard/ProjectAnalytics";
import LinkListingPage from "../Pages/UserDashboard/LinkListingPage";
import ShortlinkAnalytics from "../Pages/UserDashboard/ShortlinkAnalytics";

const user = Cookies.get("user");

const router = createBrowserRouter([
  {
    path: "/user/dashboard",
    element: (
      <Navigate to={user ? "/user/dashboard/projects" : "/login"} replace />
    ),
  },
  {
    path: "/user/dashboard",
    element: <UserDashboard />,

    children: [
      { path: "projects", element: <ProjectListing /> },
      { path: "projects/:id", element: <LinkListingPage /> },
      { path: "projects/analytics/:id", element: <ProjectAnalytics /> },
      { path: "shortlinks/analytics/:id", element: <ShortlinkAnalytics /> },
    ],
  },

  { path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
  { path: "*", element: <PageNotFound /> },
]);
export default router;
