import React, { Component } from 'react'
import './navbar.css'
export default class NavBar extends Component {
  render() {
    window.addEventListener('scroll', () =>{
      let mobileNav = document.getElementById('mobile-nav');
      const nav = document.querySelector('nav');
      nav.classList.toggle('sticky', window.scrollY > 0)
      mobileNav.classList.toggle('bg-light-2', window.scrollY > 0)

    });
    const mobileNavBar = (e) =>{
      let mobileNav = document.getElementById('mobile-nav');
      mobileNav.classList.toggle("hidden");

    }
    return (
      <>
        <nav className='nav-container'>
          <h1 className="logo">Snthz</h1>
            <svg onClick={mobileNavBar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='icon'>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          <ul className='nav-list'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <ul id='mobile-nav' className='mobile-nav-bar'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        
      </>
    )
  }
}
