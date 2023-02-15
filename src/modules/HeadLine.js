import React from "react";
import HeadlineImage from "./HeadlineImage";
import HeadlineContent from "./HeadlineContent";

const HeadLine = ({type = "default"}) => {
    if(type === "default") {
        return (
            <div className="w-full flex items-center gap-x-[112px] px-16">
              <HeadlineImage></HeadlineImage>
              <HeadlineContent></HeadlineContent>
            </div>
          );
    } else {
        return (
            <div className="w-full flex items-center gap-x-[227px] px-16">
              <HeadlineContent className="ml-[48px]"></HeadlineContent>
              <HeadlineImage src="headline2.png" className=""></HeadlineImage>
            </div>
          );
    }

};

export default HeadLine;
