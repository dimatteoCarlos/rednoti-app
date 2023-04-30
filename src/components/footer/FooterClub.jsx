import React from 'react';
import { JoinClubCard } from './JoinClubCard';
import { BottomFooter } from './BottomFooter';

export const FooterClub = () => {
  return (
    <div className='footer-club'>
      <p>We are vibrant community...</p>
      <JoinClubCard btnType={'btn-secondary'} />
    </div>
  );
};
