import RandomCard from "./RandomCard.jsx";
import { useEffect, useState } from "react";

function Title({ data, setInputValue, inputValue }) {
  const [visibility, setVisibility] = useState("block");

  useEffect(() => {
    inputValue ? setVisibility("none") : setVisibility("block");
  }, [inputValue]);

  return (
    <div>
      <section className="dark:bg-gray-700 dark:text-gray-100">
        <div className="container mx-auto  flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Quisquam necessita vel
            <span className="dark:text-violet-600  text-orange-500">
              laborum doloribus
            </span>
            delectus
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse
            ab amet vero eaque explicabo!
          </p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600  bg-orange-500 text-gray-100 dark:text-gray-50">
              Get started
            </button>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Search"
              className="flex justify-center align-center px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-200 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            />
          </div>
          {<RandomCard data={data} visibility={visibility} />}
        </div>
      </section>
    </div>
  );
}

export default Title;
