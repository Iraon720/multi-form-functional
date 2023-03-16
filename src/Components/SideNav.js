import { NavLink } from 'react-router-dom';
import './SideNav.css';

function SideNav() {
  return (
    <div className='sideNavContainer'>
      <div className='stepNum'>
        <div id='step1'>
          <NavLink to='/'>1</NavLink>
        </div>
        <div id='step2'>
          <NavLink id='#step2' to='/plan'>
            2
          </NavLink>
        </div>
        <section style={{ display: 'flex', flexDirection: 'row' }}>
          <div id='step3'>
            <NavLink id='#step3' to='/add-ons'>
              3
            </NavLink>
          </div>
          <div>
            <p className='top'>Step 3</p>
            <p className='bottom'>Add-Ons</p>
          </div>
        </section>
        <div id='step4'>
          <NavLink id='#step4' to='/summary'>
            4
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
