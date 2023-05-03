import { Link } from 'react-router-dom';

export const JoinClub = () => {
  return (
    <>
      <div className='side bg-secondary py-2'>
        <h2>join our club</h2>
        <p>
          Join our vibrant community and get together to contribute to a better
          world.
        </p>
        <Link to='#' target='_blank' className='btn-block btn'>
          Join Now
        </Link>
      </div>
    </>
  );
};
