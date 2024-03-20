import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import axios from "axios";
import countryCodes from "../../services/countryCodes";
import SecondScreen from "./SecondScreen";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [formData, setFormData] = useState({});
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  const onSubmitFirstScreen = async (data) => {
    setFormData(data);
    setShowSecondScreen(true);
  };

  const onSubmitSecondScreen = async (dataFromSecondScreen) => {
    const mergedData = { ...formData, ...dataFromSecondScreen };
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        mergedData
      );
      navigate("/login");
      console.log(response);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      {!showSecondScreen ? (
        <form onSubmit={handleSubmit(onSubmitFirstScreen)}>
          <input {...register("fullName")} placeholder="Full Name" />
          {errors.fullName && <p>{errors.fullName.message}</p>}

          <input {...register("email")} placeholder="Email" />
          {errors.email && <p>{errors.email.message}</p>}

          <div>
            <Select options={countryCodes} placeholder="Select Country Code" />
            <input {...register("phone")} placeholder="Phone" />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>

          <input {...register("postalCode")} placeholder="Postal Code" />
          {errors.postalCode && <p>{errors.postalCode.message}</p>}

          <button type="submit">Continue</button>
        </form>
      ) : (
        <SecondScreen onSubmit={onSubmitSecondScreen} />
      )}

      <hr />

      <button>Sign Up with Facebook</button>
      <button>Sign Up with Google</button>

      <label>
        <input {...register("agreedToTerms")} type="checkbox" />I agree to the
        terms and conditions
      </label>
      {errors.agreedToTerms && <p>{errors.agreedToTerms.message}</p>}
    </div>
  );
};

export default SignUpForm;
