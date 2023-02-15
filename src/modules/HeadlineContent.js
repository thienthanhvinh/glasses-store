import React from "react";

const HeadlineContent = ({className = ''}) => {
  return (
    <div className={className}>
      <h2 className="text-secondary-3 font-extrabold text-[40px] leading-[54px] mb-8">
        Headline
      </h2>
      <p className="w-[444px] mb-[48px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aut
        repudiandae cupiditate temporibus numquam, dolor omnis molestiae esse
        exercitationem delectus nihil necessitatibus iste aliquid facilis.
        Officiis quod praesentium vero sunt?
      </p>
      <p className="text-tertiary text-xl font-bold leading-[30px]">
        Read more ->
      </p>
    </div>
  );
};

export default HeadlineContent;
