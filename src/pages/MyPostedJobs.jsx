import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";


const MyPostedJobs = () => {

    const [jobs, setJobs] = useState([])
    const {user} = useAuth()

    useEffect( ()=>{
        fetch( `http://localhost:5000/jobs?email=${user.email}`)
        .then(res=> res.json())
        .then(data=>{
            setJobs(data)
        })
    },[user.email])


    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
          {
            jobs.map((job, index)=>  <tr className="bg-base-200">
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.Deadline}</td>
                <td>Blue</td>
              </tr>)
          }
       
          </tbody>
        </table>
      </div>
    );
};

export default MyPostedJobs;