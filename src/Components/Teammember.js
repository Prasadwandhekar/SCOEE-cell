import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const TeamMember = ({ name, position, image, linkedin, email }) => {
    return (
        <div className="team-member">
            <div className="member-info">
                <img src={image} alt={name} className="member-image" />
                <div className="member-details">
                    <h3>{name}</h3>
                    <p>{position}</p>
                </div>
            </div>
            <div className="member-links">
                <a href={linkedin}><FaLinkedin /></a>
                {/* <a href={`mailto:${email}`}><FaEnvelope /></a> */}
            </div>
        </div>
    );
};

export default TeamMember;
