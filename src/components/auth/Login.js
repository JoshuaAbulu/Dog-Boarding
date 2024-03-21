import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate(); 

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('', data);

      if (response.status === 200) {
        console.log("Login successful", response.data);
        navigate('/profile');
      } else {
        console.error("Login failed", response.statusText);
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          {...register("username")}
        />
        {errors.username && <p>{errors.username.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
