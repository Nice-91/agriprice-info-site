import React from "react";

const AboutCard = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default AboutCard;
