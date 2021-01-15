import React, { Component } from 'react';

const JobLocations = (props) => {
    return (
        <select id="job_locations" onChange={(event) => {
            props.func(event.target.value);
        }}>
            {props.jobs.map((job) => <option key={job._id}>{job.location}</option>)}
        </select>
    )
}

export default JobLocations;