import { useState, useEffect } from "react";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Details from "./components/Details.jsx";
import Error from "./components/Error.jsx";
import { Navigate } from "react-router";

function App() {
  const [region, setRegion] = useState("All");
  const [inputValue, setInputValue] = useState("");

  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main data={data} region={region} inputValue={inputValue} />,
    },
    {
      path: "/details/:alpha3Code",
      element: <Details data={data} />,
      errorElement: <Error />,
    },
    {
      path: `/regions/:${region}`,
      element: <Main data={data} region={region} inputValue={inputValue} />,
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <Header
          data={data}
          region={region}
          setRegion={setRegion}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
        {/* <Main data={data} region={region} inputValue={inputValue} /> */}
      </BrowserRouter>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
