import React from "react";
import FilterItem from "./FilterItem";

const FilterFrame = ({title}) => {
  return (
    <div className="shadow-md px-3 py-4 rounded-md mb-5">
      <h2 className="font-semibold text-primary leading-[33px] text-xl mb-3">
        {title}
      </h2>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>

    </div>
  );
};

export default FilterFrame;
