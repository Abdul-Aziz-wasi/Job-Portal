import React, { use } from 'react';
// import { myApplicationsPromise } from '../applicationApi';
import JobApplicationRow from './JobApplicationRow';

const ApplicatonsList = ({myApplicationsPromise}) => {
    const application =use(myApplicationsPromise)
    return (
        <div>
            <h3 className="text-x3 text-center font-bold">Applied Jobs </h3>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        application.map((app,index)=>
        <JobApplicationRow
        index={index}
        app={app}
        key={app._id}
        ></JobApplicationRow>)
      }
      
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default ApplicatonsList;