import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as iconId } from '@fortawesome/free-solid-svg-icons';

export const AuthorRibbon = ({ name, date, classCat }) => {
  return (
    <>
      <div>
        <FontAwesomeIcon className={`i ${classCat}`} icon={iconId} />
        &nbsp; &nbsp;
        <span>
          {` Written By: ${name}`}
          &nbsp; &nbsp;
        </span>
        &nbsp; &nbsp;
        <span className='date'>{`Date: ${date}`}</span>
      </div>
    </>
  );
};
