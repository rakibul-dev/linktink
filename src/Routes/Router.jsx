import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";

// Error pages
import PageNotFound from "../Pages/Error/PageNotFound";
import LoginPage from "../Pages/Auth/LoginPage";

// User pages
import UserDashboard from "../Layouts/UserDashboard";
import ProjectListing from "../Pages/UserDashboard/ProjectListing";
import ProjectAnalytics from "../Pages/UserDashboard/ProjectAnalytics";

const router = createBrowserRouter([
  {
    path: "/user/dashboard",
    element: <UserDashboard />,
    children: [
      { path: "projects", element: <ProjectListing /> },
      { path: "projects/analytics/:id", element: <ProjectAnalytics /> },
    ],
  },
  { path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
  { path: "*", element: <PageNotFound /> },
]);
export default router;
