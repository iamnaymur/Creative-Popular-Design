import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  const siteLogos = [
    "https://i.ibb.co/StMQLXF/Stackoverflow.png",
    "https://i.ibb.co/bX33Y8S/Github.png",
    "https://i.ibb.co/L1Jc2fc/Instagram.png",
    "https://i.ibb.co/khx9rBW/Behance.png",
    "https://i.ibb.co/5LDwRMJ/Dribbble.png",
  ];
  return (
    <div>
      {/* actual banner */}

      <div style={{ backgroundColor: "#F4F9FF" }}>
        <div className="flex flex-col lg:flex-row justify-between items-center container mx-auto">
          {/* banner text */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-7xl">
              <span className="text-orange-400 font-semibold">
                Hire consultant <br />
              </span>{" "}
              for boosting your <br /> business
            </h1>
            <p className="mt-4">
              Consultancy firm established by professionals with the intention{" "}
              <br /> to identify and unlock potential avenues for innovative
              ideas.
            </p>
            <button className="border py-3 px-7 mt-5 inline-flex items-center bg-blue-600 text-white">
              {" "}
              Discover more <FaArrowRight />
            </button>
          </div>

          {/* banner image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://i.ibb.co/qp1sCtT/Portrait-Image.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>

      {/* site logo and names */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 container mx-auto lg:gap-40 mt-8">
        {siteLogos.map((logo, index) => (
          <img src={logo} className="w-44 h-10" />
        ))}
      </div>
    </div>
  );
};

export default Banner;
