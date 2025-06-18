import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Main from "./components/Main.jsx";
import Details from "./components/Details.jsx";
import Error from "./components/Error.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router";

const router = createBrowserRouter([
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
