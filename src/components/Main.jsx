import Card from "./Card.jsx";
import { useOutletContext } from "react-router";

function Main() {
  const { data, region, inputValue } = useOutletContext();

  let countryData = data;
  if (region !== "All")
    countryData = data.filter((country) => country.region === region);

  if (inputValue) {
    countryData = countryData.filter((country) =>
      country.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  return (
    <>
      {data ? (
        <div className="container mx-auto px-4 py-8 flex items-center justify-center flex-wrap gap-4">
          {countryData.map((country, i) => (
            <Card
              key={i}
              flag={country.flag}
              name={country.name}
              alpha3Code={country.alpha3Code}
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Main;
