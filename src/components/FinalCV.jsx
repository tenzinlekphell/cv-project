import React from 'react';

const FinalCV = ({
  name,
  email,
  phone,
  school,
  study,
  studyDate,
  companyName,
  position,
  role,
  startDate,
  endDate,
  frontEnd,
  backEnd,
  otherSkills,
}) => {
  return (
    <div className="final-cv">
      {email ? (
        <div>
          <h1 className="cv-header">{name} CV</h1>
          <div className="general-info">
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
          </div>
          <hr />
          <div>
            <h2>Technical Skills</h2>
            <p>Front End: {frontEnd}</p>
            <p>Back End: {backEnd}</p>
            <p>Other Skills: {otherSkills}</p>
          </div>
          <hr />
          <div>
            <h2 className="cv-header education">Education</h2>
            <h4>
              Educational Institution: {school}, ({study})
            </h4>
            <p>{studyDate}</p>
          </div>
          <hr />
          <div>
            <h2 className="cv-header work">Work Experience</h2>
            <h4>
              {position}, {companyName},{' '}
              <em>
                {startDate} - {endDate}
              </em>
            </h4>
            <p>{role}</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default FinalCV;
