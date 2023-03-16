import { NavLink } from 'react-router-dom';
import './SideNav.css';

function SideNav() {
  return (
    <div id='sideNavContainer' >
      <div className='stepNum'>
        <div id='step1'>
          <NavLink className='nav-link' to='/' 
          >1</NavLink>
        </div>
        <div id='step2'>
          <NavLink className='nav-link' to='/plan'>
            2
          </NavLink>
        </div>

        <div id='step3'>
          <NavLink className='nav-link' to='/add-ons'>
            3
          </NavLink>
        </div>

        <div id='step4'>
          <NavLink className='nav-link' to='/summary'>
            4
          </NavLink>
        </div>
      </div>
      <div id='sideNavSteps'>
        <section>
          <p className='top'>Step 1</p>
          <p className='bottom'>
            <b>Your Info</b>
          </p>
        </section>
        <section >
          <p className='top'>Step 2</p>
          <p className='bottom'>
            <b>Select Plan</b>
          </p>
        </section>
        <section >
          <p className='top'>Step 3</p>
          <p className='bottom'>
            <b>Add-Ons</b>
          </p>
        </section>
        <section>
          <p className='top'>Step 4</p>
          <p className='bottom'>
            <b>Summary</b>
          </p>
        </section>
      </div>
    </div>
  );
}

export default SideNav;
{/* style={({isActive,isActiveBackground})=> {
            return{
color: isActive ? '#022959' : 'white',
backgroundColor: isActiveBackground ? '#BEE2FD'
: 'transparent'  }; */}