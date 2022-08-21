import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Service from "./Service";
const Services = () => {
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch("http://localhost:5000/allService").then((res) => res.json())
  );

  if (isLoading) {
    return;
  }

  // const services = [
  //   {
  //     serviceName: "Web Design",
  //     coursePrice: "3500",
  //     Discount: "10%",
  //     serviceTrainer: "Md. Abdur Rahman",
  //     trainerInfo: {},
  //     courseInfo: {},
  //     imgUrl: "https://i.ibb.co/xXRF8hN/webdesign.jpg",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis atque laborum eveniet reiciendis laboriosam?",
  //   },
  //   {
  //     serviceName: "Front End Web Development",
  //     coursePrice: "3500",
  //     Discount: "10%",
  //     serviceTrainer: "Md. Abdur Rahman",
  //     trainerInfo: {},
  //     courseInfo: {},
  //     imgUrl: "https://i.ibb.co/J39gs5R/frontEnd.jpg",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis atque laborum eveniet reiciendis laboriosam?",
  //   },
  //   {
  //     serviceName: "Back End Web Development",
  //     coursePrice: "3500",
  //     Discount: "10%",
  //     serviceTrainer: "Md. Abdur Rahman",
  //     trainerInfo: {},
  //     courseInfo: {},
  //     imgUrl: "https://i.ibb.co/mNdn5jD/backend-1.jpg",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis atque laborum eveniet reiciendis laboriosam?",
  //   },
  //   {
  //     serviceName: "MERN Stack Web Development",
  //     coursePrice: "3500",
  //     Discount: "10%",
  //     serviceTrainer: "Md. Abdur Rahman",
  //     trainerInfo: {},
  //     courseInfo: {},
  //     imgUrl: "https://i.ibb.co/T1qy6nb/MERN.png",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis atque laborum eveniet reiciendis laboriosam?",
  //   },
  //   {
  //     serviceName: "Responsive Web Development",
  //     coursePrice: "3500",
  //     Discount: "10%",
  //     serviceTrainer: "Md. Abdur Rahman",
  //     trainerInfo: {},
  //     courseInfo: {},
  //     imgUrl: "https://i.ibb.co/5WFpNhh/responsiv.jpg",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis atque laborum eveniet reiciendis laboriosam?",
  //   },
  //   {
  //     serviceName: "Android App Development",
  //     coursePrice: "3500",
  //     Discount: "10%",
  //     serviceTrainer: "Md. Abdur Rahman",
  //     trainerInfo: {},
  //     courseInfo: {},
  //     imgUrl: "https://i.ibb.co/zQMrYQX/Android-app-development-min.jpg",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis atque laborum eveniet reiciendis laboriosam?",
  //   },
  // ];

  // console.log(services);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
      {services?.map((Serve) => (
        <Service Serve={Serve}></Service>
      ))}
    </div>
  );
};

export default Services;
