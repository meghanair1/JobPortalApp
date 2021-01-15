import React, { Component } from 'react';


const skills_tag = (props) => {
    return (
        <select id="job_dropdown" onChange={(event) => {
            props.func(event.target.value);
        }}>
            {props.skillList.map((job) => <option key={job._id}>{job.skills_tag}</option>)}
        </select>



    )
}

export default skills_tag;