import React from 'react';

function SkillList({ src, skill }) {
  return (
    <span>
      {src.map((icon, index) => (
        <img key={index} src={icon} alt="Checkmark icon" />
      ))}
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
