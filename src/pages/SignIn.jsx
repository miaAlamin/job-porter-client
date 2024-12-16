import Lottie from "lottie-react";
import loginLottieData from '../assets/lottie/login.json'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";



const SignIn = () => {

    const {loginUser} = useContext(AuthContext)

    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const from = location.state || '/'




    const signInHandleing = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);



        loginUser(email, password)
        .then(result=>{
            console.log(result.user)
            navigate(from)
        })
        .catch(error=>{
            console(error.message)
        })
    
        

      
    };


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={loginLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl px-3 font-bold">Login Now</h1>
                    <form onSubmit={signInHandleing} className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {/* <p className="text-red-500">{error}</p> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;