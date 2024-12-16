import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {

    const sigleData = useLoaderData()
    const {company, _id, title, deadline,  category,} = sigleData;

    return (
        <div>
            <h1 className="text-3xl font-bold">Job Details: {title}</h1>
            <p>Apply For: {company}</p>
            <p>deadline: {deadline}</p>
            <Link to={`/jobapply/${_id}`} className="btn bg-blue-400">Apply Now</Link>
        </div>
    );
};

export default JobDetails;