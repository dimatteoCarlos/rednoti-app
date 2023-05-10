import React from 'react';
import { Link } from 'react-router-dom';

export const JoinClubCard = ({btnType}) => {
  return (
    <div>
      <h2>join our club</h2>
      <p>
        Our members get together and discuss their views and opinions to improve
        our services to the community
      </p>
      <Link  to='/' className={`btn ${btnType}`}>
        Join now
      </Link>
    </div>
  );
};
