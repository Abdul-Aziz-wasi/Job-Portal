import React, { Suspense } from 'react';
import Applicaton from '../Applicaton';
import ApplicatonsList from '../ApplicatonsList';
import useAuth from '../../Hooks/useAuth';
import { myApplicationsPromise } from '../../applicationApi';



const MyApplications = () => {

    const {user} =useAuth()
    return (
        <div>
            <Applicaton></Applicaton>
               
                <Suspense fallback={'loading'}>
                     <ApplicatonsList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicatonsList>
                </Suspense>
        </div>
    );
};

export default MyApplications;