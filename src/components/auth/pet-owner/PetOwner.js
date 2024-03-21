import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import "../styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const PetOwnerSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  
 export  const PetOwner = () => {
      const navigate = useNavigate() 
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(PetOwnerSchema),
    });
  
    const onSubmit = async (data) => {
      try {
        const response = await axios.post('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
  
        if (response.ok) {
            navigate('/login');
        } else {
            console.error('Signup failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error during signup:', error);
    }
    };
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Sign Up</h2>
          <input type="text" placeholder="Username" {...register("username")} />
          {errors.username && <p>{errors.username.message}</p>}
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
        <hr />
        Or
        <p><a href="/pet-sitter">Sign up as a pet sitter</a></p>
      </div>
    );
  };