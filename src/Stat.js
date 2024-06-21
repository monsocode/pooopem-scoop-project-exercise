import React from 'react'

const statData = [
    {
        image: "record-img/1.png",
        data: "14+",
        purpose: "Happy Clients"
    },
    {
        image: "record-img/2.png",
        data: "52",
        purpose: "Pets Cared For"
    },
    {
        image: "record-img/3.png",
        data: "2+",
        purpose: "Years of Experience"
    }
]

const StatData = (props) => {
    return (
        <div className='stat-card'>
            <img src={props.image} alt=""/>
            <h1>{props.data}</h1>
            <p>{props.purpose}</p>
        </div>
    )
}



const Stat = () => {
    return (
        <div className='stat-section'>
            <div className='stat-text-section'>
                <h1>Measuring Success</h1>
                    <h2>Happy Pets, Happy Clients</h2>
                <p>Explore the heartwarming impact of our dedicated pet care services, where happy pets and satisfied clients define the true measure of our success.</p>
                <a href="#">contact Us</a>
            </div>
            <div className='statistics'>
                {statData.map((card) => <StatData image={card.image} data={card.data} purpose={card.purpose} />)}
            </div>
        </div>
    )
}

export default Stat;