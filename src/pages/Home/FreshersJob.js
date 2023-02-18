import React, { useContext } from "react";
import { AuthContext } from "../../Layout/Main";
import JobCard from "./JobCard";

const FreshersJob = () => {
    const { data } = useContext(AuthContext); 
    // const {companyLogo, companyName, jobLocation, jobType, positionName} = data.fresherJobs
    console.log(data.fresherJobs);
    // console.log(companyLogo, companyName, jobLocation, jobType, positionName);
  return (
    <div className="my-10" id="fresherJobs">
      <h2 className="text-2xl sm:text-4xl text-center font-semibold text-blue-600">Top Jobs From Last Week </h2>
      <h4 className="text-xl sm:text-3xl text-center font-semibold my-6 text-blue-600">For Freshers</h4>
      <div className="flex flex-col items-center">
      {
        data?.fresherJobs?.map((jobs) => 
            (<JobCard key={jobs._id} jobs={jobs}></JobCard>)
      )}
      </div>
    </div>
  );
};

export default FreshersJob;
