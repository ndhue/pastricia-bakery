import React from "react";
import { Link } from "react-router-dom";
import { listTypes } from "../data";
export default function Type() {
  const renderTypes = () => {
    return listTypes.map((type, index) => {
      return (
        <Link
          to={`/pastricia-bakery/${type.id}`}
          key={index}
          className="col-span-2 w-full lg:col-span-1 text-center"
        >
          <div className="relative overflow-hidden">
            <img alt={type.name} src={type.src}></img>
          </div>
          <p className="pt-2 text-[17px]">{type.name}</p>
        </Link>
      );
    });
  };
  return (
    <div className="bg-white py-14 sm:py-14">
      <div className="mx-auto max-w-8xl lg:px-8 px-6 leading-8">
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl py-3">OUR PRODUCTS</h1>
          <p className="mx-auto text-md lg:text-xl sm:max-w-3xl">
            For more than 5 years, Pastricia has been making favorite baked
            goods the old-fashioned way: from scratch, in small batches, and
            using the finest ingredients.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-8 sm:max-w-xl sm:grid-cols-6 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          {renderTypes()}
        </div>
      </div>
    </div>
  );
}
