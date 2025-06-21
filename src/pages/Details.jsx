import { useParams } from "react-router";
import { useOutletContext } from "react-router";
import Card from "../components/Card";

const Details = () => {
  const { data } = useOutletContext();
  const { alpha3Code } = useParams();

  const country = data.find((country) => country.alpha3Code === alpha3Code);

  return (
    <div className="mx-auto px-4 py-8 flex items-center justify-center flex-wrap gap-4 dark:bg-gray-600">
      <Card flag={country.flag} name={country.name} />
    </div>
  );
};

export default Details;
