import Card from "../components/Card.jsx";
import { useOutletContext } from "react-router";
import Error from "../pages/Error.jsx";

function Main() {
  const { data, region, inputValue } = useOutletContext();

  let countryData = data;
  if (region !== "All") {
    countryData = data.filter((country) => country.region === region);
    if (countryData.length === 0) {
      return <Error />;
    }
  }

  if (inputValue) {
    countryData = countryData.filter((country) =>
      country.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  return (
    <div className="dark:bg-gray-600 bg-gray-100">
      {data ? (
        <div className="container mx-auto px-4 py-8 flex items-center justify-center flex-wrap gap-4  ">
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
        <div className="container mx-auto px-4 py-8 flex items-center justify-center">
          <p className="text-lg">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Main;
