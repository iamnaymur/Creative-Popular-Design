import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../../Layout/HomePageLayout";
import HomePage from "../../Components/Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
