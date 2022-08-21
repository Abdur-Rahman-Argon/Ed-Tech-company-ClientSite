import React from "react";
import banner from "../../../images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className={`pt-12 `}>
        <div className=" flex flex-col  justify-between items-center  lg:flex-row-reverse gap-6 lg:px-40  ">
          <div className="flex-1">
            <img
              src={banner}
              className=" w-60 md:w-[450px] lg:w-[500px] shadow-lg"
              alt="banner"
            />
          </div>
          <div className="flex-1 text-center lg:text-left ">
            <h1 className="text-sm my-2 font-semibold text-green-700">
              ED TECH COMPANY
            </h1>
            <h1 className="text-3xl mb-1 title-style font-bold ">
              The Best <span className="text-orange-500 ">Training Center</span>
            </h1>
            <h1 className="text-3xl my-1 title-style font-bold text-emerald-600">
              Where Ever
              <span className="text-sky-600 mx-1 font-extrabold">
                Grow Your Skills
              </span>
            </h1>
            <h1 className="text-2xl my-1  font-semibold  text-blue-800">
              And Parches Our Service
            </h1>

            <p className="text-sm my-2 font-semibold mx-auto w-8/12 lg:w-full">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea natus
              doloremque, aliquid eius numquam, eos qui, vitae accusamus illum
              nam fugiat? Cum asperiores tempore ipsum voluptatem aut magnam id
              eius?
            </p>

            <button className="btn text-white bg-green-700 border-0  my-5 ">
              Explore With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
