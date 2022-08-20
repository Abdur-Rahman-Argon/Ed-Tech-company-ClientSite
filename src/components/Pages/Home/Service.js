import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <div>
      <div class="card w-80 glass">
        <figure className=" bg-white">
          <img
            src={service.imgUrl}
            className=" w-[500px] h-[200px] "
            alt="car!"
          />
        </figure>
        <div class=" px-4 py-2">
          <h2 class="text-lg font-semibold"> {service.serviceName}</h2>
          <p className="my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur nobis atque laborum eveniet reiciendis laboriosam?
          </p>
          <div class=" flex justify-between">
            <Link to="/serviceDetails" class="btn btn-sm btn-success">
              see details
            </Link>
            <button class="btn btn-sm btn-success">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
