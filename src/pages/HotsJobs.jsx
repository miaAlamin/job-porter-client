import { useEffect, useState } from "react";
import HotsJobsCard from "./HotsJobsCard";


const HotsJobs = () => {

    const [jobdata, setJobsData] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setJobsData(data)

        })
    },[])

    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {

                    jobdata.map(job=> <HotsJobsCard key={job._id} job={job}></HotsJobsCard>)

                }
            </div>
        </div>
    );
};

export default HotsJobs;