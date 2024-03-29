import React from "react";
import Project1 from "@/assets/images/project.png";
import Project2 from "@/assets/images/project2.png";
import Image from "next/image";
import Link from "next/link";
const StartProject = () => {
  return (
    <div className="max-w-6xl mx-auto pt-28 pb-20 text-secondary-light">
      <div className="bg-secondary-dark pl-40 pr-[532px] py-[90px] rounded-[30px] flex flex-col items-center relative overflow-hidden">
        <h5 className="text-xs font-light tracking-[8px]">GET IN TOUCH</h5>
        <h2 className="text-6xl font-medium text-center my-[18px]">
          Let&apos;s Start <br />
          <i className=" font-thin text-primary-dark -mt-5"> Your Project</i>
        </h2>
        <p className="text-base font-light text-center text-white px-[50px]">
          Contact us to create <br />
          your dream online presence
        </p>
        <Link
          href="/contact"
          className=" bg-primary-dark py-3 px-6 rounded-full mt-8 text-secondary-dark"
        >
          Get In Touch
        </Link>
        <Image src={Project2} alt="" className="absolute right-0 top-0" />
        <Image src={Project1} alt="" className="absolute right-0" />
      </div>
    </div>
  );
};

export default StartProject;
