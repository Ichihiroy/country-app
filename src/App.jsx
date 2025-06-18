import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Navigate, Outlet } from "react-router";

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

  return (
    <>
      <Header
        data={data}
        region={region}
        setRegion={setRegion}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <Outlet context={{ data, region, inputValue }} />
      <Footer />
    </>
  );
}

export default App;
