import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-col1'>
        <h1>Contact Us</h1>
        <span>
          <a>info@poopemscoopem</a>
          <p>+1 (917) 297-5152</p>
        </span>
      </div>
      <div className='footer-col2'>
        <h1>Our Services</h1>
        <span>
          <a>Cat Litter Clean up</a>
          <a>Dog Waste Clean up</a>
          <a>Home Feeding</a>
          <a>Trash Day Help(Yowell Ranch Only)</a>
          <a>Yard Clean Up(Trash)</a>
        </span>
      </div>
      <div className='footer-col3'> 
        <h1>Quick Link</h1>
        <span>
          <a>About Us</a>
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
        </span>
        </div>
        <div className='footer-col4'>
          <img src="logo/logo.png" width="100px"/>
          <span>
          <img src="" />
          <img src="" />
          <img src="" />
          </span>
        </div>
    </div>
  )
}

export default Footer