import React, { useState } from "react";
import Nav from "./Nav.jsx";
import Title from "./Title.jsx";

function Header({ data, setRegion, region, setInputValue, inputValue }) {
  return (
    <header>
      <Nav data={data} setRegion={setRegion} />
      {region != "All"
        ? null
        : data && (
            <Title
              data={data}
              setInputValue={setInputValue}
              inputValue={inputValue}
            />
          )}
    </header>
  );
}

export default Header;
