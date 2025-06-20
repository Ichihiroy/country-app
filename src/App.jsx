import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [inputValue, setInputValue] = useState("");

  let { region } = useParams();
  if (region === undefined) {
    region = "All";
  }
  console.log(region);

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
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <Outlet context={{ data, region, inputValue }} />
      <Footer />
    </>
  );
}

export default App;
