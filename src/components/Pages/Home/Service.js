import React from "react";

const Service = ({ img }) => {
  return (
    <div>
      <div class="card w-80 glass">
        <figure className=" bg-white">
          <img src={img} className=" w-[500px] h-[200px] " alt="car!" />
        </figure>
        <div class=" px-4 py-2">
          <h2 class="text-lg font-semibold"> Front End Web Development</h2>
          <p className="my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur nobis atque laborum eveniet reiciendis laboriosam?
          </p>
          <div class=" flex justify-between">
            <button class="btn btn-sm btn-success">see details</button>
            <button class="btn btn-sm btn-success">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
