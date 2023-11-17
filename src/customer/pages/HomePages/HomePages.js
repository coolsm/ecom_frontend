import React from "react";
import MainCrosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";

const HomePages = () => {
  return (
    <div>
      <MainCrosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel />
        <HomeSectionCarosel />

        <HomeSectionCarosel />

        <HomeSectionCarosel />

        <HomeSectionCarosel />
      </div>
    </div>
  );
};

export default HomePages;
