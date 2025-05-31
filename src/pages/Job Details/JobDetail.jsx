import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetail = () => {
    const {_id,title,company} =useLoaderData();
    
    return (
        <div>
           
           
            

            <div className="card card-border bg-base-100 w-96 my-4">
  <div className="card-body font-bold">
    <h1>Postion: {title}</h1>
    <p>company : {company}</p>
    <div className="card-actions justify-end">
      <Link to={`/jobApplay/${_id}`}><button className='btn btn-primary'>Apply Now</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default JobDetail;