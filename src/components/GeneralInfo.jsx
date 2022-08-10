import React, { useState } from 'react';

const GeneralInfo = () => {
  // States for general information
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [generalInfo, setGeneralInfo] = useState([]);

  // Handle changes for the states
  const nameChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };

  const addInfo = () => {
    setGeneralInfo([...generalInfo, name, email, phone]);
  };

  const handleSubmit = (e) => {
    alert('Submission successful!');
    e.preventDefault();
    setName('');
    setEmail('');
    setPhone('');
  };
  return (
    <div>
      <h1>General Information</h1>
      <form action="" onSubmit={handleSubmit} className="form-container">
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={nameChange} />
        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={emailChange} />
        <label htmlFor="">Phone Number</label>
        <input type="number" value={phone} onChange={phoneChange} />
        <button>Edit</button>
        <button type="submit" onClick={addInfo}>
          Submit
        </button>
      </form>
      <div>
        <p>Name: {generalInfo[0]}</p>
        <p>Email: {generalInfo[1]}</p>
        <p>Phone Number: {generalInfo[2]}</p>
      </div>
    </div>
  );
};

export default GeneralInfo;
