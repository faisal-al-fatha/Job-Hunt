import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Footer = () => {
  const Links = [
    { title: "Employers", links: ["Post a Job", "Browse Candidates", "Employer Listing", "Company Policies"] },
    { title: "Candidates", links: ["Browse Jobs", "Freshers Job", "Experienced Job", "Top Companies"] },
    { title: "Account", links: ["Privacy", "Terms", "Create Account", "Login"] },
  ];
  return (
    <footer className="pt-20 md:px-16 px-4 bg-lightprimary  bg-cyan-200">
     
      <div className="flex md:flex-row flex-col-reverse gap-20">
        <div className="flex flex-col">
        <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold text-sky-600 hover:bg-cyan-200 ml-0">Job Hub</Link>
          <p className="md:w-3/5 leading-relaxed text-sm text-gray-600 pt-7">
            We envision a world where everyone gets more than their expectations.
          </p>
        </div>

        <div className="flex  space-x-4">
                    <Link rel="noopener noreferrer" to='/' title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-sky-500 text-gray-900">
                        <FaInstagram></FaInstagram>
                    </Link>

                    <Link rel="noopener noreferrer" to='/' title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-sky-500 text-gray-900">
                        <FaTwitter></FaTwitter>
                    </Link>
                    <Link rel="noopener noreferrer" to='/' title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-sky-500 text-gray-900">
                    <FaFacebookF></FaFacebookF>
                    </Link>
                
                </div>
        </div>


        <div className="flex-1 flex flex-wrap gap-20">
          {Links.map((link, i) => (
            <ul key={i}>
              <h1 className="font-semibold pb-3">{link.title}</h1>
              {link.links.map((lk, idx) => (
                <li key={idx} className="py-2.5 text-sm text-gray-600">
                  {lk}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <p className="text-center py-10 mt-6 text-sm text-gray-600">
        Copyright © 2023. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;