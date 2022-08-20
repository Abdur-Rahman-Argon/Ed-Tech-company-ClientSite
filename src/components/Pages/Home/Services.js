import React, { useEffect, useState } from "react";
const Services = () => {
  const [services, setService] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/allService", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setService(data);
      });
  }, []);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
      {services?.map((service) => (
        <Services service={service}></Services>
      ))}
    </div>
  );
};

export default Services;
