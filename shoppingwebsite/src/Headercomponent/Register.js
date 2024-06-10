import React from 'react'
import './register.css'
import google from '../images/google-rainbow.gif'
import { Button } from 'react-bootstrap';
import facebook from '../images/facebook.gif'
import insta from '../images/sedih.gif'
const Register = () => {
  return (
    <div className='control'>
        
      <h1>REGISTRATION PAGE</h1>
      <div className='register-form'>
      <form>
        <div class='one'>
              <label className='class-label'>Full Name</label>
        <input type='text'name='name'  className='class-input'/>
        </div>
      <div class='one'>
     <label className='class-label'>E-Mail</label>
        <input type='mail' className='class-input'/>
      </div>
       
        <div class='one'>
       <label className='class-label'>Password</label>
        <input type='password' className='class-input'/>
        </div>
        <div class='one'>
              <label className='class-label'>Confirm Password</label>
        <input type='password'className='class-input'/>
        </div>
        <div className='one'>
            <input type='checkbox'/>
     <label>Accept all terms and conditions</label>
        </div>
      
     
      </form>
      <div className='btn-one'>
        <Button>SUBMIT</Button>
      <Button variant='danger'>CANCEL</Button>
      </div>
       </div>
       <hr></hr>
       <div className='footer'>
        <h6>Or Register With</h6>
        <div className='images'>
            <a href=''><img src={google}/></a>
            <a href=''><img src={facebook}/></a>
            <a href=''><img src={insta}/></a>
        </div>
       </div>
       <div className='check'>
        <h6>Already a User ? Please <a href=''>Login</a></h6>
       </div>
      
    </div>
  )
}

export default Register;
