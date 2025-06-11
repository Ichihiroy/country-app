import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [data, setData] = useState();
  const [region, setRegion] = useState("All");
  const [inputValue, setInputValue] = useState("");

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
      <Main data={data} region={region} inputValue={inputValue} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
