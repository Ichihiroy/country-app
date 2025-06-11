import Card from "./Card";

function Main({ data, region, inputValue }) {
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
            <Card key={i} flag={country.flag} name={country.name} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Main;
