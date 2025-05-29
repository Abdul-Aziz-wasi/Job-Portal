import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const JobCard = ({job}) => {
    // ,jobType,category
    const {title,location,requirements,salaryRange,description,company,company_logo,_id}=job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <div className='flex gap-2'>
    <figure>
    <img
      src={company_logo}
      className='w-16'
      alt="Shoes" />
  </figure>
  <div>
    <h3 className='text-3xl'> {company}</h3>
    <p className='flex items-center gap-1'> <FaMapMarkerAlt /> {location}</p>
  </div>
  </div>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>salary:{salaryRange.min} - {salaryRange.max}</p>
    <p>{description}</p>
    <div className="card-actions ">
      {
        requirements.map((skill,index)=><div
        key={index}
         className="badge badge-outline">{skill}</div>)
      }
    </div>
    <div className="card-actions justify-end">
      <Link to={`/Job/${job._id}`}>
      <button  className="btn btn-primary">Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default JobCard;