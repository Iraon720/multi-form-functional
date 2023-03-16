import { NavLink } from 'react-router-dom';
import './SideNav.css';

function SideNav() {
  return (
    <div className='NavBar'>
      <NavLink id='#step1' to='/'>
        1
      </NavLink>
      <NavLink id='#step2' to='/plan'>
        2
      </NavLink>
      <NavLink id='#step3' to='/add-ons'>
        3
      </NavLink>
      <NavLink id='#step4' to='/summary'>
        4
      </NavLink>
    </div>
  );
}

export default SideNav;
