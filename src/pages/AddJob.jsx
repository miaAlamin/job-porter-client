import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const AddJob = () => {

  const {user} = useAuth()
  const navigate = useNavigate()






  const handleAddJobs = (e)=>{
    e.preventDefault()

    const formData = new FormData(e.target)

    const initialData = Object.fromEntries(formData.entries())

    console.log(initialData)

    const {min, max, currency, ...newJob} = initialData;
    console.log(newJob)
    newJob.salaryRange = {min, max, currency}
    newJob.requirement = newJob.requirement.split('\n')
    newJob.responsibilities = newJob.responsibilities.split('\n')

    console.log(newJob)


    fetch('http://localhost:5000/jobs',{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify(newJob)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
          Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Your work has been saved",
                      showConfirmButton: false,
                      timer: 1500
                  });

                  navigate('/mypostedjobs')
      }
    })



  }



    return (
        <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
        <form onSubmit={handleAddJobs} className="card-body">
          {/* job title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input type="text" name="title" placeholder="title" className="input input-bordered" required />
          </div>
          {/* job location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          {/* job type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select defaultValue='Pick the job' className="select select-ghost w-full max-w-xs" name="jobtype">
                <option disabled >Pick the best JS framework</option>
                <option>Full-Time</option>
                <option>Interen</option>
                <option>Part-Time</option>
              </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Field</span>
            </label>
            <select defaultValue='pick the job' className="select select-ghost w-full max-w-xs" name="jobfield">
                <option disabled >Pick the best JS framework</option>
                <option>Engennering</option>
                <option>Marketing</option>
                <option>Finace</option>
              </select>
          </div>
          {/* job field */}
          <p>Salary Range</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
    

          <div className="form-control">
            <label className="label">
              <span className="label-text">Min</span>
            </label>
            <input type="text" name="min" placeholder="Min" className="input input-bordered" required />
            <label className="label">
              
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Max</span>
            </label>
            <input type="text" name="max" placeholder="Max" className="input input-bordered" required />
            <label className="label">
             
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Currency</span>
            </label>
            <select defaultValue='currency' className="select select-ghost w-full max-w-xs"name="currency">
                <option disabled >Courency</option>
                <option>BDT</option>
                <option>USC</option>
                <option>ROPI</option>
              </select>
          </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Descripttion</span>
            </label>
            <textarea name="description" className="textarea textarea-bordered" placeholder="Description"></textarea>
            <label className="label">
             
            </label>
          </div>
          {/* company */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input type="text" name="companyname" placeholder="Company Name" className="input input-bordered" required />
            <label className="label">
              
            </label>
          </div>
          {/* requenment */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Requirement</span>
            </label>
            <textarea name="requirement" className="textarea textarea-bordered" placeholder="Description"></textarea>
            <label className="label">
             
            </label>
          </div>
          {/* Responsbilites */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Responsibilities</span>
            </label>
            <textarea name="responsibilities" className="textarea textarea-bordered" placeholder="put each requirement in a new line"></textarea>
            <label className="label">
             
            </label>
          </div>
            {/* Hr name */}

            <div className="form-control">
            <label className="label">
              <span className="label-text">Hr Name</span>
            </label>
            <input type="text" name="hr_name" placeholder="Hr Name" className="input input-bordered" required />
            <label className="label">
              
            </label>
          </div>
            {/* Hr email */}

            <div className="form-control">
            <label className="label">
              <span className="label-text">Hr Email</span>
            </label>
            <input type="text" defaultValue={user?.email} name="hr_email" placeholder="Hr Email" className="input input-bordered" required />
            <label className="label">
              
            </label>
          </div>
          {/* daedline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span> 
            </label>
            <input type="date"  name="Deadline" className="input input-bordered" required />
            <label className="label">
              
            </label>
          </div>
            {/* company logo */}

            <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo</span>
            </label>
            <input type="text" name="company_logo" placeholder="Company Logo" className="input input-bordered" required />
            <label className="label">
              
            </label>
          </div>


          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
};

export default AddJob;