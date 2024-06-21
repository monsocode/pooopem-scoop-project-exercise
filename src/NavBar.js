import React from 'react'

const NavBar = () => {
  return (

    <div>
      <nav className='contact-nav'>
        <div>
          <p>+234-813-607-7964</p>
          <p>Mon - Sat 9:00AM - 6:00PM</p>
        </div>
        <div className='logo'>
          <img src="logo/facebook-f.svg" alt="facebook" />
          <img src="logo/instagram.svg" alt="instagram" />
          <img src="logo/envelope-regular.svg" alt="mail" />
          <img src="logo/phone-solid.svg" alt="phone call" />
        </div>
      </nav>

      <nav className='intro-nav'>
          <img src="logo/logo.png" alt="poopem" />
          <ul>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#booking">Booking</a>
            <a href="#contact">Contact</a>
          </ul>
      </nav>

    </div>

  )
}

export default NavBar;