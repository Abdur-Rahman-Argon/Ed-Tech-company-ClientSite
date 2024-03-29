import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Service from "./Service";
const Services = () => {
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch("https://ed-tech-server.onrender.com/allService").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return;
  }

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
      {services?.map((Serve) => (
        <Service key={Serve._id} Serve={Serve}></Service>
      ))}
    </div>
  );
};

export default Services;
