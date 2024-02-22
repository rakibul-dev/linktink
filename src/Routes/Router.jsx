import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";

// Error pages
import PageNotFound from "../Pages/Error/PageNotFound";
import LoginPage from "../Pages/Auth/LoginPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
  { path: "*", element: <PageNotFound /> },
]);
export default router;
