import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  address: yup.string().required("Address is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one number, and one symbol"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SecondScreen = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div>
      <h2>Complete your registration for a seamless experience</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register("address")} placeholder="Address" />
        {errors.address && <p>{errors.address.message}</p>}

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}

        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SecondScreen;
