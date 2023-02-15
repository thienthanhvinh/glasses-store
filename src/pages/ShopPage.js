import React from "react";
import Heading from "../components/common/Heading";
import Input from "../components/input/Input";
import SpringSales from "../components/sales/SpringSales";
import LayoutGlasses from "../layout/LayoutGlasses";
import FilterFrame from "../modules/FilterFrame";
import { v4 } from "uuid";
import GlassesGrid from "../modules/GlassesGrid";
import GlassesItem from "../modules/GlassesItem";
import HeadLine from "../modules/HeadLine";

const ShopPage = () => {
  return (
    <>
      <LayoutGlasses>
        <Heading className="mt-14">Shop</Heading>
        <div className="px-16">
          <div className="flex items-center">
            <p className="font-semibold text-xl text-primary mr-52">Filters</p>
            <div className="flex gap-x-3">
              <p className="bg-secondary text-primary text-sm px-4 py-1 rounded-md">
                Flex 1 x
              </p>
              <p className="bg-secondary text-primary text-sm px-4 py-1 rounded-md">
                Flex 2 x
              </p>
              <p className="bg-secondary text-primary text-sm px-4 py-1 rounded-md">
                Flex 3 x
              </p>
            </div>
            <p className="text-primary ml-auto">Sort by</p>
          </div>
          <div className="mt-[60px] flex">
            <div className="w-[15%]">
              <FilterFrame title="Availability"></FilterFrame>
              <FilterFrame title="Price"></FilterFrame>
              <FilterFrame title="Brand"></FilterFrame>
            </div>
            <div className="w-[85%]">
              <GlassesGrid className="grid-cols-4 gap-y-12 mb-20">
                {Array(12)
                  .fill(0)
                  .map((item) => (
                    <GlassesItem key={v4()}></GlassesItem>
                  ))}
              </GlassesGrid>
              <div className="border border-secondary-3 mb-4"></div>
              <div className="flex items-center justify-between">
                <p className="text-primary text-xl font-semibold">Prev</p>
                <div className="flex gap-x-4 text-secondary-3 text-lg">
                  <span className="font-semibold">1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
                <p className="text-primary text-xl font-semibold">Next</p>
              </div>
            </div>
          </div>
        </div>
        <Heading className="mb-[80px] mt-[120px]">Our advice</Heading>
        <HeadLine></HeadLine>
        <HeadLine type="secondary"></HeadLine>
      
      </LayoutGlasses>
    </>
  );
};

export default ShopPage;
