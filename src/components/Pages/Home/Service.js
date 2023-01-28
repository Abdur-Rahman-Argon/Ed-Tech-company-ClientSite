import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const Service = ({ Serve }) => {
  //
  const [user] = useAuthState(auth);

  const addToCart = () => {
    const cartProduct = {
      customerName: user.displayName,
      customerEmail: user.email,
      Service: Serve,
    };
    //
    fetch("https://ed-tech-server.onrender.com/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("This services added to Cart");
      });
  };

  return (
    <div>
      <div className="card w-80 glass">
        <figure className=" bg-white">
          <img
            src={Serve.imgUrl}
            className=" w-[500px] h-[200px] "
            alt="car!"
          />
        </figure>
        <div className=" px-4 py-2">
          <h2 className="text-lg font-semibold"> {Serve.serviceName}</h2>
          <p className="my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur nobis atque laborum eveniet reiciendis laboriosam?
          </p>
          <div className=" flex justify-between">
            <Link to="/serviceDetails" className="btn btn-sm btn-success">
              see details
            </Link>
            <button onClick={addToCart} className="btn btn-sm btn-success">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
