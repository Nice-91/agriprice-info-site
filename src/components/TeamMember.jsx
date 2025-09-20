import React from "react";

const TeamMember = ({ image, name, role, bio }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{bio}</p>
    </div>
  );
};

export default TeamMember;
