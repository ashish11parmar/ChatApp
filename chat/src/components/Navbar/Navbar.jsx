import React, { useEffect, useState } from 'react';
// import {auth, provider} from '../DatabaseConfig/config.js';
// import {Link, NavLink, Outlet} from 'react-router-dom';
import chat from '../images/chat.png';
import './Navbar.css';

const Navbar = () => {
  const [email, SetEmail] = useState([]);
  const [name, SetName] = useState([]);
  const [url, setUrl] = useState([]);

  useEffect(()=>{
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const url = localStorage.getItem('profile');

    if(email || name || url){
      SetEmail(email);
      setUrl(url);
      SetName(name);
    }
    
  })

  



  return (
    <>
    <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand d-flex" href="/">
    <img src={chat} width="45px" height="40px" alt=""/>
  <h3 className='text'>ChatApp</h3>
  </a>
  <div className='btn-right'>
    <button className='btn-right' data-bs-toggle="offcanvas" data-bs-target="#demo"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg></button>
  </div>

  <div className="offcanvas offcanvas-end" id="demo">
  <div className="offcanvas-header">
    <h1 className="offcanvas-title">User Profile</h1>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div className="offcanvas-body">
    <div className='p-image'>
      <img className='profile-image' src={url} alt='profile'/>
    </div>
    <hr/>
    <div className='logout'>
    <button className='btn-logout' to='/' onClick={() => localStorage.clear()}>Logout</button>
    </div>
    <div className='display-name'>
    <span className='name-text'>Name:</span>
      <h3>{name}</h3>
    </div>
    <div className='display-name'>
    <span className='email-text'>Email:</span>
      <h4>{email}</h4>
    </div>
  </div>
</div>
{/* <Outlet /> */}
</nav>
    </>
  )
}

export default Navbar