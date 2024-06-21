import React from 'react'

const Banner = () => {
    return (
        <div className='banner'>
            <span className='banner-text'>
                <p><span className='light-text'>We Care</span> For Your Pets</p>
                <p>Keeping your yard clean, one scoop at a time with Poop'em Scoop'em.</p>
                <a href="#contact">Contact Us</a>
            </span>
            <img src="logo/dog.png" alt="dog" />
        </div>

    )
}

export default Banner;