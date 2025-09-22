import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature">
      <h3>
        <i className={icon}></i> {title}
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
