import React, { useState } from 'react';
import FinalCV from './FinalCV';
import '../styles/app.css';

const CVBuilder = () => {
  // States for general information
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [generalInfo, setGeneralInfo] = useState([]);

  // States for educational information
  const [school, setSchool] = useState('');
  const [studyTitle, setStudyTitle] = useState('');
  const [studyDate, setStudyDate] = useState([]);
  const [educationInfo, setEducationInfo] = useState([]);

  // States for practical experience information
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [role, setRole] = useState('');
  const [dateStarted, setDateStarted] = useState([]);
  const [dateEnded, setDateEnded] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);

  // States for skills section
  const [frontEndSkills, setFrontEndSkills] = useState('');
  const [backEndSkills, setBackEndSkills] = useState('');
  const [otherSkills, setOtherSkills] = useState('');
  const [skills, setSkills] = useState([]);

  // Handle changes for the general information states
  const nameChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };

  // Handle changes for the skills states
  const frontEndSkillsHandler = (e) => {
    setFrontEndSkills(e.target.value);
  };
  const backEndSkillsHandler = (e) => {
    setBackEndSkills(e.target.value);
  };
  const otherSkillsHandler = (e) => {
    setOtherSkills(e.target.value);
  };

  // Handle changes for the educational information states
  const schoolNameHandler = (e) => {
    setSchool(e.target.value);
  };

  const studyNameHandler = (e) => {
    setStudyTitle(e.target.value);
  };

  const studyDateHandler = (e) => {
    setStudyDate(e.target.value);
  };

  // Handle changes for the practical experience states
  const companyNameHandler = (e) => {
    setCompanyName(e.target.value);
  };
  const positionHandler = (e) => {
    setPosition(e.target.value);
  };
  const roleHandler = (e) => {
    setRole(e.target.value);
  };
  const startDateHandler = (e) => {
    setDateStarted(e.target.value);
  };
  const endDateHandler = (e) => {
    setDateEnded(e.target.value);
  };

  // Handles the creation of the resume
  const handleSubmit = (e) => {
    alert('Submission successful!');
    e.preventDefault();
    setName('');
    setEmail('');
    setPhone('');
    setStudyTitle('');
    setStudyDate('');
    setSchool('');
    setCompanyName('');
    setPosition('');
    setRole('');
    setDateStarted('');
    setDateEnded('');
    setFrontEndSkills('');
    setBackEndSkills('');
    setOtherSkills('');
  };

  // Adds the general info, education, and work experience data once button is clicked
  const addInfo = () => {
    setGeneralInfo([...generalInfo, name, email, phone]);
    setEducationInfo([...educationInfo, school, studyTitle, studyDate]);
    setWorkInfo([
      ...workInfo,
      companyName,
      position,
      role,
      dateStarted,
      dateEnded,
    ]);
    setSkills([...skills, frontEndSkills, backEndSkills, otherSkills]);
  };

  return (
    <div>
      <h1>CV Builder App</h1>
      <div className="cv-container">
        <form action="" onSubmit={handleSubmit} className="form-container">
          {/* General Information input fields are below */}

          <h1>General Information</h1>
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={nameChange} />
          <label htmlFor="">Email</label>
          <input type="email" value={email} onChange={emailChange} />
          <label htmlFor="">Phone Number</label>
          <input type="number" value={phone} onChange={phoneChange} />

          {/* Skills input fields are below */}

          <h1>Technical Skill Set</h1>
          <label htmlFor="">Front End</label>
          <input
            type="list"
            value={frontEndSkills}
            onChange={frontEndSkillsHandler}
          />
          <label htmlFor="">Back End</label>
          <input
            type="text"
            value={backEndSkills}
            onChange={backEndSkillsHandler}
          />
          <label htmlFor="">Other</label>
          <input
            type="text"
            value={otherSkills}
            onChange={otherSkillsHandler}
          />

          {/* Education input fields are below  */}

          <h1>Education</h1>
          <label htmlFor="">School Name</label>
          <input type="text" value={school} onChange={schoolNameHandler} />
          <label htmlFor="">Title of study</label>
          <input type="text" value={studyTitle} onChange={studyNameHandler} />
          <label htmlFor="">Date of study</label>
          <input type="date" value={studyDate} onChange={studyDateHandler} />

          {/*  Practical Experience input fields are below */}

          <h1>Practical Experience</h1>
          <label htmlFor="">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={companyNameHandler}
          />
          <label htmlFor=""> Position Title</label>
          <input type="text" value={position} onChange={positionHandler} />
          <label htmlFor="">Main Responsibilities</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={role}
            onChange={roleHandler}
          ></textarea>
          <label htmlFor="">Date Started</label>
          <input type="date" value={dateStarted} onChange={startDateHandler} />
          <label htmlFor="">Date Ended/Present </label>
          <input type="date" value={dateEnded} onChange={endDateHandler} />
          <button>Edit</button>
          <button onClick={addInfo}>Create Resume</button>
        </form>

        <FinalCV
          name={generalInfo[0]}
          email={generalInfo[1]}
          phone={generalInfo[2]}
          school={educationInfo[0]}
          study={educationInfo[1]}
          studyDate={educationInfo[2]}
          companyName={workInfo[0]}
          position={workInfo[1]}
          role={workInfo[2]}
          startDate={workInfo[3]}
          endDate={workInfo[4]}
          frontEnd={skills[0]}
          backEnd={skills[1]}
          otherSkills={skills[2]}
        />
      </div>
    </div>
  );
};

export default CVBuilder;
