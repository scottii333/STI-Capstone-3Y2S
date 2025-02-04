import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Decline from "./assets/Pages/Decline.jsx";
import Success from "./assets/Pages/Success.jsx";
import Canceled from "./assets/Pages/Canceled.jsx";
import Payment from "./assets/Components/Payment.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Payment />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Canceled />,
      },
      {
        path: "/decline",
        element: <Decline />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
