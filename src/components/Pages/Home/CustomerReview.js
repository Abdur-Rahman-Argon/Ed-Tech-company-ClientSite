import React, { useEffect, useState } from "react";

const CustomerReview = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/publicReview")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  const ratings = ["1", "2", "3", "4", "5"];

  return (
    <div className=" w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around items-end gap-5">
      {reviews?.map((review) => (
        <div class="card w-[380px] p-5 bg-base-100 shadow-xl">
          <div className="flex justify-between items-top">
            <div className="flex items-center ">
              <div class="avatar">
                <div class="w-9 h-9 m-2 rounded-full ">
                  <img src={review?.userImg} className="w-10" />
                </div>
              </div>
              <div>
                <h1 className="font-bold ">{review?.userName}</h1>
                <span className=" text-xs font-bold my-0">
                  {review?.reviewDate}
                </span>
              </div>
            </div>
            <div>
              <span className=" text-lg flex gap-1 items-center">
                {ratings.map((r, index) => (
                  <li key={index} className=" list-none">
                    <i
                      class={` fa-star ${
                        review?.ratings > index
                          ? "text-orange-500 fa-solid"
                          : "text-gray-500 fa-regular"
                      }    `}
                    ></i>
                  </li>
                ))}
              </span>
            </div>
          </div>
          <div class="">
            <h4 class="text-lg my-1 font-medium">{review?.reviewTitle}</h4>
            <p>{review?.userReview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerReview;
