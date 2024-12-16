import Lottie from "lottie-react";
import registerLottieData from '../assets/lottie/register.json';
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";

const Register = () => {
    const { createUser } = useContext(AuthContext); // Correct placement inside the component
    const [error, setError] = useState();

    const registerHandleing = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        setError('')

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password)) {
          setError('Password must be at least 6 characters long, include an uppercase, a lowercase, and a number.');
          return;
        }
        

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl px-3 font-bold">Register Now</h1>
                    <form onSubmit={registerHandleing} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-red-500">{error}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
