import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router";
import App from "./App.jsx";
import Main from "./pages/Main.jsx";
import Details from "./pages/Details.jsx";
import Error from "./pages/Error.jsx";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/details/:alpha3Code",
        element: <Details />,
        errorElement: <Error />,
      },
      {
        path: "/regions/:region",
        element: <Main />,
        errorElement: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
