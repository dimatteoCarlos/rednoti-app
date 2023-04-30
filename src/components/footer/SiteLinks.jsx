import React from 'react';
import { Link } from 'react-router-dom';

const pagesObj = [
  { ruta: '#', elem: 'Help & Support' },
  { ruta: '#', elem: 'Privacy Policy' },
  { ruta: '#', elem: 'About Us' },
  { ruta: '#', elem: 'Contact Us' },
];

export const SiteLinks = () => {
  return (
    <div>
      <h3>site links</h3>
      <>
        <ul className='list'>
          {pagesObj.map((x, indx) => (
            <li key={indx}>
              <Link to={x.ruta}>{x.elem}</Link>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};
