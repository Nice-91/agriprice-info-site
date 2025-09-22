import React from "react";

const TeamMember = ({ image, name, role, bio }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} />
      <div className="team-member-info">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
