import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight as bullet } from '@fortawesome/free-solid-svg-icons';

const categoryObj = [
  'Sports',
  'Entertainment',
  'Technology',
  'Fashion',
  'Shopping',
];
export const CategoryList = () => {
  return (
    <>
      <ul className='list'>
        {categoryObj.map((x, indx) => (
          <li key={indx}>
            <span>
              <FontAwesomeIcon className='i' icon={bullet} />
            </span>
            &nbsp;&nbsp;{x}
          </li>
        ))}
      </ul>
    </>
  );
};
