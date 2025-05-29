import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetail = () => {
    const {_id,title,company} =useLoaderData();
    
    return (
        <div>
            <h1>{title}</h1>
            <p>company:{company}</p>
            <Link to={`/jobApplay/${_id}`}><button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetail;