import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom"; 
// import axios from "axios";
import Header from "../../components/navbar/Header";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one number, and one symbol"
    ),
});

const Login = () => {
  const [isPetOwnerLogin, setIsPetOwnerLogin] = useState(false);

  const toggleLoginType = () => {
    setIsPetOwnerLogin((prev) => !prev);
  };

  return (
    <div className="w-10/12">
      {!isPetOwnerLogin ? (
        <UserLogin toggleLoginType={toggleLoginType} />
      ) : (
        <PetSitterLogin toggleLoginType={toggleLoginType} />
      )}
    </div>
  );
};

const PetSitterLogin = ({ toggleLoginType }) => {
  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // const response = await axios.post(
      //   "",
      //   data
      // );
      // const token = response.token;

      // localStorage.setItem("token", token);
      navigate("/petsitter1");
      console.log(data);
    } catch (error) {
      console.log("Invalid email or password");
    }
  };

  return (
    <div className="w-10/12">
      <Header />
      <h2 className="form_header">Welcome back, pawsome pet parent!</h2>
      <div className="input_field_div">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} type="email" placeholder="Email" className="input_field my-2" />
            {errors.email && <p>{errors.email.message}</p>}

            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="input_field my-2"
            />
            {errors.password && <p>{errors.password.message}</p>}
            <button type="submit" className="next_button input_field">Login</button>

          </form>
          
      </div>
      <button onClick={toggleLoginType} className="underline">Login as PetOwner</button>
    </div>
  );
};

const UserLogin = ({ toggleLoginType }) => {
  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // const response = await axios.post(
      //   "",
      //   data
      // );
      // const token = response.token;
  
      // localStorage.setItem("token", token);
      navigate("/dog-registration");
      console.log(data);
    } catch (error) {
      console.log("Invalid email or password");
    }
  };
  
  return (
    <div className="w-10/12">
      <Header />
      <h2 className="form_header">Welcome back, pawsome pet parent!</h2>
      <div className="input_field_div">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} type="email" placeholder="Email" className="input_field my-2" />
            {errors.email && <p>{errors.email.message}</p>}

            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="input_field my-2"
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit" className="next_button input_field">Login</button>  
          </form>
          
      </div>
      <button onClick={toggleLoginType} className='underline'>Login as PetSitter</button>
    </div>
  );
};

export default Login;
