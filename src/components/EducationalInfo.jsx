import React from 'react';

const EducationalInfo = () => {
  return (
    <div>
      <h1>Educational Experience</h1>
      <form action="" className="form-container">
        <label htmlFor="">School Name</label>
        <input type="text" />
        <label htmlFor="">Title of study</label>
        <input type="text" />
        <label htmlFor="">Date of study</label>
        <input type="date" />
        <button>Edit</button>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EducationalInfo;