import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import countryCodes from "../../services/countryCodes";
import SecondScreen from "./SecondScreen";
import { useRegistrationData } from "../../context/RegistrationContext";
import backArrow from '../../../src/images/Frame 34910.png'
import logo from '../../../src/images/LOgo6_prev_ui 1.png'
import facebookLogo from './../../images/facebook.png'
import googleLogo from './../../images/google.png'
import or_img from '../../images/Frame 42.png'

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  postalCode: yup.string().required("Postal Code is required"),
  agreedToTerms: yup
    .boolean()
    .oneOf([true], "You must agree to terms and conditions"),
});

const SignUpForm = () => {
  const [showSecondScreen, setShowSecondScreen] = useState(false);
  const { registrationData, updateRegistrationData } = useRegistrationData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    updateRegistrationData(data);
    setShowSecondScreen(true);
    console.log(registrationData);
  };

  return (
    <div className="w-10/12 py-4">
      <div className="header flex justify-between">
        <div className="back_arrow_div cursor-pointer">
          <img src={backArrow} alt="back arrow" />
        </div>
        <img src={logo} alt="logo" />
        <h2 className=" text-xl font-bold text-dogboarding-100">Sign Up</h2>
      </div>
      
      {!showSecondScreen ? (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <p className=" self-center text-xl font-normal text-dogboarding-200 pb-6">Let the pawsome adventures begin</p>

          <div className="form_fields flex flex-col gap-6">
          <input {...register("fullName")} placeholder="Full Name" className=" border-2 rounded-lg border-dogboarding-200 py-2 pl-2" />
          {errors.fullName && <p>{errors.fullName.message}</p>}

          <input {...register("email")} placeholder="Email" className=" border-2 rounded-lg border-dogboarding-200 py-2 pl-2" />
          {errors.email && <p>{errors.email.message}</p>}

          <div className="flex flex-col gap-4">
            <Select options={countryCodes} placeholder="Select Country Code"   />
            <input {...register("phone")} placeholder="Phone" className=" border-2 rounded-lg border-dogboarding-200 py-2 pl-2 w-full" />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>

          <input {...register("postalCode")} placeholder="Postal Code" className=" border-2 rounded-lg border-dogboarding-200 py-2 pl-2" />
          {errors.postalCode && <p>{errors.postalCode.message}</p>}

          <button type="submit" className=" bg-dogboarding-300 py-2 rounded-lg">Continue</button>
          </div>
        </form>
      ) : (
        <SecondScreen />
      )}
      <hr />
      <img src={or_img} alt="or" className="pt-4"/>
      <div className="sign_up_options flex flex-col gap-4 py-4">
        <button className=" bg-dogboarding-400 py-2 rounded-lg flex justify-center gap-4">
          <img src={facebookLogo} alt="facebook logo" />
          <p>Sign Up with Facebook</p>
          </button>
        <button className=" bg-dogboarding-500 py-2 rounded-lg flex justify-center gap-4">
          <img src={googleLogo} alt="facebook logo" />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="terms">
        <label className="flex w-full gap-2 text-dogboarding-200 text-sm">
          <input {...register("agreedToTerms")} type="checkbox" />
          <p> By signing up you accept the 
            <span className=" text-dogboarding-600"> Terms of Service </span>
            and 
            <span className=" text-dogboarding-600"> Privacy Policy </span> </p>
        </label>
      </div>
      {errors.agreedToTerms && <p>{errors.agreedToTerms.message}</p>}
    </div>
  );
};

export default SignUpForm;
