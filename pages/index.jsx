import Banner from "@/components/Home/Banner";
import Discover from "@/components/Home/Discover";
import Faq from "@/components/Home/Faq";
import Featured from "@/components/Home/Featured";
import OurPrecing from "@/components/Home/Ourprecing";
import TopSellers from "@/components/Home/Topsellers";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="bg-mainGray w-full min-h-screen relative overflow-hidden">
      <div className="container">
        <Banner />
        <Discover />
        <Featured />
        <TopSellers />
        <OurPrecing />
        <Faq />
      </div>
    </div>
  );
};

export default index;
