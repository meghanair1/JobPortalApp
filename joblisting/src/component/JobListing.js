
import { Component } from 'react';
import JobLocations from './JobLocations';
import JobType from './JobType';
import JobSkillType from './JobSkillType';
import Modal from './Modal';

import {
  Redirect
} from "react-router-dom";
class JobListing extends Component {

  constructor() {
    super()
    this.state = {
      jobs: [],
      filtered_jobs: [],
      show: false,
      current_location: null,
      current_skill: null,
      current_job_type: null
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  componentDidMount() {
    fetch('https://divercity-test.herokuapp.com/jobs').then((result) => {
      result.json().then((data) => {
        this.setState({ jobs: data.jobs, filtered_jobs: data.jobs })
      })
    })
  }

  handleLocationChange(location) {
    this.setState({ current_location: location }, this.applyFilter);
  }

  handleSkillChange(skill) {
    this.setState({ current_skill: skill }, this.applyFilter);
  }

  handleJobTypeChange(job_type) {
    this.setState({ current_job_type: job_type }, this.applyFilter);
  }

  applyFilter = () => {
    console.log('In applyFilter....');
    console.log(this.state.current_location);
    console.log(this.state.current_skill);
    console.log(this.state.current_job_type);

    let filtered_jobs = this.state.jobs;

    if (this.state.current_location !== null) {
      filtered_jobs = filtered_jobs.filter(job =>
        job.location && job.location.trim() === this.state.current_location.trim());
    } else {
      filtered_jobs = this.state.jobs;
    }

    if (this.state.current_skill !== null) {
      filtered_jobs = filtered_jobs.filter(job => {
        return job.skills_tag && job.skills_tag.includes(this.state.current_skill);
      });
    }

    if (this.state.current_job_type !== null) {
      filtered_jobs = filtered_jobs.filter(job =>
        job.job_type && job.job_type.trim() === this.state.current_job_type.trim());
    }
    this.setState({ filtered_jobs: filtered_jobs })
  }


  render() {
    return (
      <div>
        {

          <form>
            <label id="location" for="location">Choose location:</label>

            <JobLocations jobs={this.state.jobs} func={this.handleLocationChange.bind(this)} />
            <label id="job_type" for="job_type">Choose JobType:</label>
            <JobType jobs={this.state.jobs} func={this.handleJobTypeChange.bind(this)} />
            <label id="skill" for="skill">Choose Skills:</label>
            <JobSkillType jobs={this.state.jobs} func={this.handleSkillChange.bind(this)} />

          </form>

        }

        <br></br><br></br>

        {
          this.state.filtered_jobs ?
            this.state.filtered_jobs.map((job) =>
              <div key={job.id}>
                <span><b>Title:</b> {job.title}</span>
                <span><b>Company:</b> {job.company}</span>
                <span><b>Location:</b> {job.location}</span>
                <span><b>JobType:</b> {job.job_type}</span>
                <span><b>No of applicant:</b>No of applicant: {job.applicant_count}</span>
                <span><b>Skills: </b>{job.skills_tag.join(",  ")} </span>
                {/* {this.renderRedirect()} */}
                <br /><br />
                <Modal show={this.state.show} handleClose={this.hideModal}>
                  <h2>Enter the details to apply for the position</h2>


         Name  <input type="text" id="fname" name="fname" /><br /><br />
         Email <input type="text" id="lname" name="lname" /><br /><br />
         Phone  <input type="text" id="fname" name="fname" /><br /><br />
         City <input type="text" id="lname" name="lname" /><br /><br /><br />


                </Modal>

                <button onClick={this.showModal}>Apply to this position</button>

                <br></br><br></br><br></br><br></br>


              </div>
            ) :
            null
        }

      </div>
    );
  }
}
export default JobListing;