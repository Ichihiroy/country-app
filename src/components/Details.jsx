import { useParams } from "react-router";
import Card from "./Card";
import Error from "./Error";

const Details = ({ data }) => {
  const { alpha3Code } = useParams();
  const country = data.find((country) => country.alpha3Code === alpha3Code);

  if (data === undefined || !country) {
    {
      return <Error />;
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center flex-wrap gap-4">
      <Card flag={country.flag} name={country.name} />
    </div>
  );
};

export default Details;
