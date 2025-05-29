import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApplay = () => {
    const {id:jobId}=useParams()
    const {user}= useAuth()
    console.log(jobId,user)

    const handleApplay =(e)=>{
        e.preventDefault()
        const form =e.target;
        const linkedIn =form.linkedIn.value;
        const github =form.github.value;
        const resume =form.resume.value;

        console.log(linkedIn,github,resume);


        const application ={
            jobId,
            applicant: user.email,
            linkedIn,
            github,
            resume
        }
        axios.post('http://localhost:3000/application',application)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your application has been submitted",
                showConfirmButton: false,
                timer: 1500
                });
            }
        }).catch(error=>{
            console.log(error)
        })

    }



    return (
        <div className='justify-center'>
            <h3 className='text-4xl'>Applay for jobs: <Link to={`/Job/${jobId}`}>Details</Link></h3>
          <form onSubmit={handleApplay}>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

  <label className="label">LinkedIn Link</label>
  <input type="ulr" className="input" name='linkedIn' placeholder="LinkedIn profile link" />

  <label className="label">Github Link</label>
  <input type="url" className="input" name='github' placeholder="Github Link" />

  <label className="label">Resume Link</label>
  <input type="url" className="input" name='resume' placeholder="Resume link" />

  <input type="submit" className='btn btn-primary' value="Applay" />
</fieldset>

          </form>
        </div>
    );
};

export default JobApplay;