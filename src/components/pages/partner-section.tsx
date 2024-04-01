import React from "react";
import trace from "@/assets/images/trace.png";
import scale from "@/assets/images/scale.png";
import chain from "@/assets/images/chain.png";
import load from "@/assets/images/load.png";
import Image from "next/image";

const PartnerSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-10">
      <div className="flex justify-between mb-14  ">
        <h2 className="text-6xl font-medium mt-14">
          Trusted by{" "}
          <i className="bg-primary text-primary-foreground">Great Brands</i>
        </h2>
        <div className="font-light w-[331px] ">
          <h2 className="text-xs tracking-widest">OUR CLIENTS</h2>
          <p className="text-base mt-4 dark:text-white ">
            The client is paramount, and we prioritizededicated support for our
            clients. Welcome to the forefront of exceptional service at Reset
            Digital.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-between gap-x-[136px] px-20">
        <Image src={trace} alt="Trace" />
        <Image src={scale} alt="Scale" />
        <Image src={chain} alt="Chain" />
        <Image src={load} alt="Load" />
        <Image src={trace} alt="Trace" />
        <Image src={scale} alt="Scale" />
        <Image src={chain} alt="Chain" />
        <Image src={load} alt="Load" />
      </div>
    </div>
  );
};

export default PartnerSection;
