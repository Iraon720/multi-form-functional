import './Step1.css';
import { useState, useContext } from 'react';


function Step1() {
 
  return (
    <div
      className='personalForm'
      style={{ marginRight: '50px', marginTop: '20px' }}
    >
      <form >
        <b>
          <h1 className='per'>Personal Info</h1>
        </b>
        <p className='p'>
          Please provide your name, email address, and phone number.
        </p>
        <form>
          <div className='Name'>
            <label>Name</label>
            <input
              required
              type='text'
              className='form'
              placeholder='e.g. Stephen King'
           
          />
          </div>

          <div className='Name'>
            <label>Email</label>
            <input
              required
              type='text'
              className='form'
              placeholder='e.g. stephenking@lorem.com'
            ></input>
          </div>

          <div className='Name'>
            <label>Number</label>
            <input
              required
              type='text'
              className='form'
              placeholder='e.g. +1 234 567 890'
            ></input>
          </div>
        </form>
      </form>
    </div>
  );
}

export default Step1;
