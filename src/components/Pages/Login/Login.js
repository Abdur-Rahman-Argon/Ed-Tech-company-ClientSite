import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    console.log(data);
  };

  return (
    <div className="card mx-auto my-5 p-8 sm:p-3 card-compact sm:w-96 bg-base-100 shadow-2xl">
      <h1 className="text-center text-2xl font-bold">Please Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label class="label">
          <span class="label-text text-xl font-bold">Email:</span>
        </label>
        <input
          {...register("email", { required: true })}
          className="input input-bordered my-1 input-primary w-full "
        />
        <label class="label">
          <span class="label-text-alt text-base font-semibold text-red-600">
            {errors.email?.type === "required" && "Email is required"}
          </span>
        </label>
        <label class="label">
          <span class="label-text text-xl font-bold">Password:</span>
        </label>
        <input
          {...register("password", { required: true })}
          className="input input-bordered my- input-primary w-full "
        />
        <label class="label">
          <span class="label-text-alt text-base font-semibold text-red-600">
            {errors.password?.type === "required" && "Password is required"}
          </span>
        </label>

        <input
          type="submit"
          value="LogIn"
          className="btn w-full my-2 btn-success"
        />
      </form>
      <div></div>
    </div>
  );
};

export default Login;
