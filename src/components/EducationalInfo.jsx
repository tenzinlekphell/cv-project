import React, { useState } from 'react';

const EducationalInfo = () => {
  const [school, setSchool] = useState('');
  const [studyTitle, setStudyTitle] = useState('');
  const [educationInfo, setEducationInfo] = useState([]);

  const schoolNameHandler = (e) => {
    setSchool(e.target.value);
  };

  const studyNameHandler = (e) => {
    setStudyTitle(e.target.value);
  };

  const addInfo = () => {
    setEducationInfo([...educationInfo, school, studyTitle]);
  };

  const handleSubmit = (e) => {
    alert('Submission successful!');
    e.preventDefault();
    setStudyTitle('');
    setSchool('');
  };
  return (
    <div>
      <h1>Educational Experience</h1>
      <form action="" onSubmit={handleSubmit} className="form-container">
        <label htmlFor="">School Name</label>
        <input type="text" value={school} onChange={schoolNameHandler} />
        <label htmlFor="">Title of study</label>
        <input type="text" value={studyTitle} onChange={studyNameHandler} />
        <label htmlFor="">Date of study</label>
        <input type="date" />
        <button>Edit</button>
        <button onClick={addInfo}>Submit</button>
      </form>

      <div>
        <p>School Name: {educationInfo[0]}</p>
        <p>Title of Study: {educationInfo[1]}</p>
      </div>
    </div>
  );
};

export default EducationalInfo;
