import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";

const HotsJobsCard = ({job}) => {

    const {title, _id, company, company_logo, requirements, description, location,salaryRange} = job;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="flex">
                <figure>
                <img
                className="w-16"
                    src={company_logo}
                    alt="Shoes" />
                </figure>
                <div>
                    <h1 className="text-2xl font-bold">{company}</h1>
                    <p className="flex items-center gap-2"><LuMapPin />{location}</p>
                </div>
            </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {requirements.map(skill=> <p className="border-2 text-center rounded-md">{skill}</p>)}
          </div>
         <div className="flex items-center">
         <p className="mt-6 text-xs">  Salary: {salaryRange.min} - {salaryRange.max}</p>
         <Link to={`jobdetails/${_id}`} className="btn mt-4 bg-blue-400">Apply Now</Link>
         </div>
        </div>
      </div>
    );
};

export default HotsJobsCard;