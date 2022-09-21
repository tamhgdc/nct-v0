import React from "react";
import GridLayout from "../../layout/GridLayout";
import BannerSkeleton from "./BannerSkeleton";
import SliderSkeleton from "./SliderSkeleton";

const HomeSkeleton = () => {
  return (
    <div className="px-4">
      <BannerSkeleton />
      <SliderSkeleton />
    </div>
  );
};

export default HomeSkeleton;
