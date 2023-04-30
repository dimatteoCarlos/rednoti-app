import Social from './Social';
import Logo from './Logo';
import MenuNavigation from './MenuNavigation';

const NavBar = () => {
  return (
    <div id='navbar'>
      <Logo />
      <Social />
      <MenuNavigation />
    </div>
  );
};

export default NavBar;
