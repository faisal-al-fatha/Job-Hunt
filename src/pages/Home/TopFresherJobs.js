import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobCard from './JobCard';

const TopFresherJobs = () => {
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://job-hunt-server-faisal-al-fatha.vercel.app/job-data/fr/6")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
    return (
        <div className="my-10">
      <h2 className="text-2xl sm:text-4xl text-center font-semibold text-blue-600">Top Jobs From Last Week </h2>
      <h4 className="text-xl sm:text-3xl text-center font-semibold my-6 text-blue-600">For Freshers</h4>
      <div className="flex flex-col items-center">
      {
        jobs?.map((jobs) => 
            (<JobCard key={jobs.id} jobs={jobs}></JobCard>)
      )}
      </div>
      <div className='text-center mt-6'>
      <Link
                  to="/fresherJobs"
                  className="inline-flex items-center justify-center h-8 px-2 sm:h-12 sm:px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-sky-100 hover:text-black focus:shadow-outline focus:outline-none text-xs sm:text-lg"
                >
                  See All Jobs
                </Link>
      </div>
    </div>
  );
};

export default TopFresherJobs;