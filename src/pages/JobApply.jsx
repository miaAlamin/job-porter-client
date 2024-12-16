import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";



const JobApply = () => {

    const {id} = useParams()
    

    const {user} = useAuth()

    console.log(id, user)
    const navigate  = useNavigate()

    const JobApplyHandleingSubmit = (event)=>{
        event.preventDefault()

        const form = event.target;
        const linkdin = form.linkdin.value;
        const github = form.github.value;
        const Resome= form.Resome.value;
        
        // console.log(linkdin, github, Resome)

        const jobApplication = {
            job_id: id,
            applecate_email: user.email,
            linkdin,
            github,
            Resome
        }


        fetch('http://localhost:5000/job-applications',{
            method:'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(jobApplication)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate('/myapplication')
            }
        })

    }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={JobApplyHandleingSubmit} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Linkdin URL</span>
                </label>
                <input type="url" name="linkdin" placeholder="Linkdin URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Resume URL</span>
                </label>
                <input type="url" name="Resome" placeholder="Resome URL" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">GitHub URL</span>
                </label>
                <input type="url" name="github" placeholder="GitHub URL" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default JobApply;