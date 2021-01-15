import React, { Component } from 'react';

const skill = (props) => {
    let skills = [];
    props.jobs.map((job) => {
        skills = skills.concat(job.skills_tag);
    });
    return (
        <select id="job_dropdown" onChange={(event) => {
            props.func(event.target.value);
        }}>
            {skills.map((skill) => <option key={skill}>{skill}</option>)}
        </select>
    )
}

export default skill;