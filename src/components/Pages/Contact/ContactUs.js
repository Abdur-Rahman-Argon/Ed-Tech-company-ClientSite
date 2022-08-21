import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [success, setSuccess] = useState("");
  const [faild, setFaild] = useState("");

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const name = data.name;
    const message = data.message;
    const contactMessage = { email, name, message };

    emailjs
      .send(
        "service_nu5snk8",
        "template_kzqs50h",
        contactMessage,
        "Xlav_mnjU3QUSphKZ"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(`Mr ${name} Your Message Sent Successfully`);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setFaild(`Sorry Your Message not Sent`);
      });

    console.log(data);
  };
  return (
    <div className=" bg-slate-300 p-8 bg-opacity-50 rounded-3xl shadow-2xl font-semibold  lg:w-9/12 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5">
          <div className="my-3 flex-1">
            <label htmlFor="name">Name</label>
            <br />
            <input
              {...register("name", { required: true })}
              id="name"
              className="input text-gray-900 font-semibold text-sm md:text-xl input-bordered w-full focus:outline-none"
            />
          </div>
          <div className=" my-3 flex-1">
            <label htmlFor="email">Email</label>
            <br />
            <input
              {...register("email", { required: true })}
              id="email"
              className="input text-gray-900 font-semibold text-sm md:text-xl input-bordered w-full focus:outline-none"
            />
          </div>
        </div>

        <div className=" my-3">
          <label htmlFor="email">Subject</label>
          <br />
          <input
            {...register("subject", { required: true })}
            id="email"
            className="input text-gray-900 font-semibold text-sm md:text-xl input-bordered w-full focus:outline-none"
          />
        </div>

        <div className=" my-3">
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            {...register("message", { required: true })}
            name="message"
            id="message"
            cols="30"
            rows="8"
            className="input text-gray-900 font-semibold text-sm md:text-xl input-bordered h-20 w-full focus:outline-none"
          ></textarea>
        </div>
        <div className="my-3">
          <button
            type="submit"
            className="input text-gray-600 font-semibold text-xl input-bordered w-44"
          >
            send <i className="fa-solid fa-paper-plane mx-2 "></i>
          </button>
        </div>
        <div>
          {success && (
            <p className="m text-lime-700 font-bold text-xl">{success}</p>
          )}
          {faild && <p className=" text-red-700  font-bold text-xl">{faild}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
