import React from "react";

const GlassesItem = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[250px] mb-4">
        <img src="glasses.png" alt="" className="w-full h-full object-cover" />
      </div>
      <p className="text-secondary-3 font-semibold text-2xl">Model Name</p>
      <p className="font-normal text-secondary-3">Price</p>
      <p className="font-semibold text-lg leading-[30px] text-tertiary">
        See details ->
      </p>
    </div>
  );
};

export default GlassesItem;
