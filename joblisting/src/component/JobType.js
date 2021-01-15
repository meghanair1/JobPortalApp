import React, { Component } from 'react';

const job_type = (props) => {
    return (
        <select id="job_dropdown" onChange={(event) => {
            props.func(event.target.value);
        }}>{props.jobs.map((job) => <option key={job._id}>{job.job_type}</option>)}
        </select>



    )
}

export default job_type;