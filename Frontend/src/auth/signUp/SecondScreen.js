import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import {useNavigate} from "react-router-dom"
import { useRegistrationData } from "../../context/RegistrationContext";

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

const SecondScreen = () => {
  // const navigate = useNavigate()
  const { registrationData, updateRegistrationData } = useRegistrationData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    updateRegistrationData(data); 
    submitRegistrationData(); 
  };
  

  const submitRegistrationData = async () => {
    try {
      console.log("Submitting registration data:", registrationData);
      // navigate("/dog-registration")
    } catch (error) {
      console.error("Error submitting registration data:", error);
    }
  };

  return (
    <div>
      <div className="form_header flex justify-center">
        <h2 className=" text-center text-xl font-normal text-dogboarding-200 pb-6">Complete your registration for a seamless experience</h2>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="form_fields flex flex-col gap-6">
          <input {...register("address")} placeholder="Address" className="border-2 rounded-lg border-dogboarding-200 py-2 pl-2"/>
          {errors.address && <p>{errors.address.message}</p>}

          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="border-2 rounded-lg border-dogboarding-200 py-2 pl-2"
          />
          {errors.password && <p>{errors.password.message}</p>}

          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className="border-2 rounded-lg border-dogboarding-200 py-2 pl-2"
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

          <button type="submit" className=" bg-dogboarding-300 py-2 rounded-lg">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SecondScreen;
