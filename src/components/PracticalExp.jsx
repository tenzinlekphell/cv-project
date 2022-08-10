import React from 'react';

const PracticalExp = () => {
  return (
    <div>
      <h1>Practical Experience</h1>
      <form action="" className="form-container">
        <label htmlFor="">Company Name</label>
        <input type="text" />
        <label htmlFor=""> Position Title</label>
        <input type="text" />
        <label htmlFor="">Main Responsibilities</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <label htmlFor="">Date Started</label>
        <input type="date" />
        <label htmlFor="">Date Ended/Present </label>
        <input type="date" />
        <button>Edit</button>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PracticalExp;
