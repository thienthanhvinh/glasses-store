import React, { Fragment } from "react";
import Category from "../components/category/Category";
import Heading from "../components/common/Heading";
import Intro from "../components/intro/Intro";
import SpringSales from "../components/sales/SpringSales";
import Menu from "../modules/Menu";
import GlassesGrid from "../modules/GlassesGrid";
import GlassesItem from "../modules/GlassesItem";
import { v4 } from "uuid";
import Button from "../components/button/Button";
import HeadLine from "../modules/HeadLine";
import Footer from "../modules/Footer";
import LayoutGlasses from "../layout/LayoutGlasses";

const HomePage = () => {
  return (
    <Fragment>
      <LayoutGlasses>
        <SpringSales></SpringSales>
        <Intro></Intro>
        <Category></Category>
        <Heading>Popular</Heading>
        <GlassesGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <GlassesItem key={v4()}></GlassesItem>
            ))}
        </GlassesGrid>
        <div className="text-center mb-[140px]">
          <Button className="mt-[70px] px-5 py-2 rounded-[4px]">See all</Button>
        </div>
        <Heading>New</Heading>
        <GlassesGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <GlassesItem key={v4()}></GlassesItem>
            ))}
        </GlassesGrid>
        <div className="text-center mb-[140px]">
          <Button className="mt-[70px] px-5 py-2 rounded-[4px]">See all</Button>
        </div>
        <Heading>Sunwear</Heading>
        <GlassesGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <GlassesItem key={v4()}></GlassesItem>
            ))}
        </GlassesGrid>
        <div className="text-center mb-[112px]">
          <Button className="mt-[70px] px-5 py-2 rounded-[4px]">See all</Button>
        </div>
        <Heading className="mb-[80px]">Our advice</Heading>
        <HeadLine></HeadLine>
        <HeadLine type="secondary"></HeadLine>
      </LayoutGlasses>
    </Fragment>
  );
};

export default HomePage;
