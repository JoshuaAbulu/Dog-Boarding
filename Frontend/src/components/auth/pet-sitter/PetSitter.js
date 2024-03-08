import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import "../styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const PetSitterSchema = yup.object().shape({
    firstname: yup.string().required('First Name is required'),
    lastname: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    mobile: yup.string().required('Mobile number is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    description: yup.string().required('Description is required'),
    role: yup.string().required('Role is required'),
});

export const PetSitter = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(PetSitterSchema),
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
                <input type="text" placeholder="First Name" {...register('firstname')} />
                {errors.firstname && <p>{errors.firstname.message}</p>}
                <input type="text" placeholder="Last Name" {...register('lastname')} />
                {errors.lastname && <p>{errors.lastname.message}</p>}
                <input type="email" placeholder="Email" {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}
                <input type="text" placeholder="Mobile" {...register('mobile')} />
                {errors.mobile && <p>{errors.mobile.message}</p>}
                <input type="password" placeholder="Password" {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
                <input type="text" placeholder="Description" {...register('description')} />
                {errors.description && <p>{errors.description.message}</p>}
                <input type="text" placeholder="Role" {...register('role')} />
                {errors.role && <p>{errors.role.message}</p>}
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <a href="/login">Login</a>
            </p>
            <hr />
         <p><a href="/pet-owner">Sign up as a pet owner</a></p>
        </div>
    );
};