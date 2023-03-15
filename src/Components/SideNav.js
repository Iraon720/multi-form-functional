import { NavLink } from 'react-router-dom';
import './SideNav.css';

function SideNav() {
  return (
    <div className='NavBar'>
      <NavLink>1</NavLink>
      <NavLink>2</NavLink>
      <NavLink>3</NavLink>
      <NavLink>4</NavLink>
    </div>
  );
}

export default SideNav;
