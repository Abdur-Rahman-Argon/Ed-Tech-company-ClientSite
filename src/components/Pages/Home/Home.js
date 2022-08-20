import React from "react";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      {/*  */}
      <Banner></Banner>

      {/* Service */}
      <section className="my-16 w-11/12 mx-auto ">
        <h1 className=" title-style font-bold mx-auto w-44 border-gray-800 border-b-2 text-2xl text-center">
          Our Services
        </h1>
        <div>
          <Services></Services>
        </div>
      </section>
    </div>
  );
};

export default Home;
