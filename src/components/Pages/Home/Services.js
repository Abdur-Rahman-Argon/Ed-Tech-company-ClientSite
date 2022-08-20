import React from "react";
import Service from "./Service";
import android from "../../../images/android.png";
import backend from "../../../images/Backend.png";
import backend2 from "../../../images/backend_1.jpg";
import frontend from "../../../images/frontEnd.jpg";
import mern from "../../../images/MERN.png";
import responsiv from "../../../images/responsiv.jpg";
import webdesign from "../../../images/webdesign.jpg";
import android2 from "../../../images/Android-app-development-min.jpg";
const Services = () => {
  const array = [webdesign, frontend, backend2, mern, responsiv, android2];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
      {array.map((arr) => (
        <Service img={arr}></Service>
      ))}
    </div>
  );
};

export default Services;
