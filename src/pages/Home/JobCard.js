import React from 'react';
import { ImLocation } from "react-icons/im";
import { Link } from 'react-router-dom';

const JobCard = ({jobs}) => {
    const {id, companyLogo, positionName, jobType, companyName} = jobs
    return (
        <div key={id} className="card card-side bg-base-100 shadow-xl w-11/12 mx-2 sm:w-3/5 h-72 sm:h-48 my-3">
        <figure >
          <img
            src={companyLogo} className="sm:w-40 sm:h-40 w-32 h-auto  object-cover" 
            alt="logo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{positionName} </h2>
          <p>Comapany: {companyName}, Job Type: {jobType}</p>
          <p><ImLocation className="inline mr-3"></ImLocation>{jobs.jobLocation}</p>
          <div className="card-actions justify-end">
            <Link to={`/job/${id}`} className="inline-flex items-center justify-center h-8 px-2 sm:h-12 sm:px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-sky-100 hover:text-blue-600 focus:shadow-outline focus:outline-none text-xs sm:text-lg">Apply</Link>
          </div>
        </div>
      </div>)
;
};

export default JobCard;