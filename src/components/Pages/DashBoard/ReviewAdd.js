import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const ReviewAdd = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  const [currentRatings, setCurrentRatings] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const date = new Date()
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .split(" ")
    .join(" ");

  const handleClick = (value) => {
    setCurrentRatings(value);
    // console.log(currentRatings);
  };
  const handleMouseHover = (value) => {
    setHoverValue(value);
    // console.log(hoverValue);
  };
  const handleMouseLave = (value) => {
    setHoverValue(undefined);
    // console.log(hoverValue);
  };

  const ratings = ["1", "2", "3", "4", "5"];

  const onSubmit = (data) => {
    console.log(data, user);

    const ReviewAdd = {
      userName: user.displayName,
      userEmail: user.email,
      userImg: user.photoURL,
      reviewDate: date,
      reviewTitle: data.title,
      userReview: data.review,
      ratings: currentRatings,
    };
    console.log(ReviewAdd);

    fetch("http://localhost:5000/publicReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ReviewAdd),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success === true) {
          // navigate("/");
          toast("Successfully add to Cart");
        }
      });
  };
  return (
    <div className=" w-8/12 my-8 mx-auto">
      <h4 className="text-3xl font-bold text-gray-600">
        Please Write Your Review
      </h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-8">
          <span className=" text-lg md:text-2xl lg:text-5xl flex gap-8">
            {ratings.map((r, index) => (
              <li key={index} className=" list-none">
                <i
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseHover(index + 1)}
                  onMouseLeave={() => handleMouseLave()}
                  class={` fa-star ${
                    (hoverValue || currentRatings) > index
                      ? "text-orange-500 fa-solid"
                      : "text-gray-500 fa-regular"
                  }    `}
                ></i>
              </li>
            ))}
          </span>
        </div>

        <div>
          <input
            {...register("title", { required: true })}
            placeholder="Review title"
            className="input border-gray-200 my-1  text-lg text-gray-600 font-medium focus:outline-none w-full "
          />
        </div>
        <div className="my-2">
          <textarea
            {...register("review", { required: true })}
            placeholder="write anythings about this  product?"
            className="input  border-gray-200  text-lg text-gray-600 font-medium  focus:outline-none w-full h-24"
          ></textarea>
        </div>

        <div className="my-5">
          <button
            type="submit"
            className="btn w-full my-2 btn-success text-lg font-medium normal-case text-gray-600"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewAdd;
