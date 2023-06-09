import { NavLink } from 'react-router-dom';
const MenuNavigation = () => {
  const pagesObj = [
    { ruta: '/', elem: 'Home' },
    { ruta: '/about', elem: 'About' },
    { ruta: '/0', elem: 'Article' },
  ];
  return (
    <>
      <ul className='menu'>
        {pagesObj.map((x, indx) => (
          <li key={indx}>
            <NavLink
              to={x.ruta}
              className={({ isActive }) => (isActive ? 'current' : '')}
            >
              {x.elem}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuNavigation;
