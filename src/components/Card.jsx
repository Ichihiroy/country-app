import React from "react";
import { Link } from "react-router";

function Card({ flag, name, alpha3Code }) {
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-700 dark:text-gray-100 bg-white">
      <img
        src={flag}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <Link to={`/details/${alpha3Code}`}>
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          </Link>

          <p>
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600  bg-orange-500 text-gray-100 dark:text-gray-50"
        >
          Read more
        </button>
      </div>
    </div>
  );
}

export default Card;
