import { useEffect, useState } from "react";

function RandomCard({ data, visibility }) {
  const [randomCountry, setRandomCountry] = useState([]);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const randomIndex = randomNumber(0, data.length - 1);
    setRandomCountry(data[randomIndex]);
    console.log(`Random country selected: ${data[randomIndex].name}`);
  }, [data]);

  return (
    <div
      className="max-w-xs p-6 m-5 rounded-md shadow-lg dark:bg-gray-600 bg-gray-100 dark:text-gray-100"
      style={{ display: visibility }}
    >
      <img
        src={randomCountry.flag}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400 text-orange-500">
          Random Country
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          {randomCountry.name}
        </h2>
      </div>
      <p>
        Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed
        feugiat mi. Etiam ut lacinia dui.
      </p>
    </div>
  );
}

export default RandomCard;
