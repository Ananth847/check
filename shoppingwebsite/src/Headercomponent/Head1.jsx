import React from 'react';
import './style.css';
import { Button } from 'react-bootstrap';
import logo from '../images/logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';

const Head1 = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/register')
  }

  const handleProfile = ( id) => {
    // e.preventDefault();
    navigate(`/profile/${id}`)
  }
  const data = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 33, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 45, city: "Chicago" }

  ]


  return (<>
    <div className='head-part'>
      <div className='logo-img'>
        <img src={logo} alt="logo" />
        <h3 className='animate-charcter'>shopping website.com</h3>
      </div>
      <div className='search-type'>
        <form>
          <i className='fa fa-search search-icon'></i>
          <input type='search' placeholder='search here.....' />
        </form>
      </div>
      <div className='login-register'>
        <i className="fa fa-user user-icon"></i>
        <Link to={"/profile/"+3}><Button variant='outline-info' size='sm' >LOGIN</Button> </Link>
        <Button variant='outline-success' size='sm' onClick={handleNavigate}>REGISTER</Button>

        <Button variant='outline-success' size='sm' >PROFILE</Button>

      </div>

    </div>
    {data.map(v => <div onClick={() => handleProfile(v.id)}>
      <h1>{v.name}</h1></div>)}
  </>
  );
}

export default Head1;
