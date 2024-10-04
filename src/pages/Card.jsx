import React from 'react';

function Card({ icon, heading, paragraph }) {
  return (
    <div className="card">
      <i className={icon}></i>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
}

export default Card;