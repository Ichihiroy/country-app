import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

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
      path: "/country-app",
      element: <Main data={data} region={region} inputValue={inputValue} />,
    },
  ]);

  return (
    <>
      <Header
        data={data}
        region={region}
        setRegion={setRegion}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      {/* <Main data={data} region={region} inputValue={inputValue} /> */}
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
