import React from 'react'
// import Data from './Data'

//object data
const precautionData = [
  {
    headLine: "Home Feeding",
    textContent: "Ensure your pets are well-fed and happy with our home feeding services. We provide personalized care for both dogs and cats, making sure they receive the nourishment and attention they deserve",
    image: "service_img/service_icon_1.png",
  },
  {
    headLine: "Cat Litter Cleaning",
    textContent: "Ensure your pets are well-fed and happy with our home feeding services. We provide personalized care for dogs and cats, ensuring they receive the nourishment and attention they deserve",
    image: "service_img/service_icon_2.png",
  },
  {
    headLine: "Yard Clean Up (Trash)",
    textContent: "Embark on a Journey of Yard Excellence with Our Professional Yard Cleaning Service at Poop'em Scoop'em. Let Us Transform Your Outdoor Space, One Scoop at a Time.",
    image: "service_img/service_icon_3.png",
  },
  {
    headLine: "Horse waste clean up",
    textContent: "Embark on a Journey to Equestrian Elegance with Our Expert Horse Waste Cleaning Service at Equi-Cleaners. Let Us Transform Your Stables and Paddocks, One Pile at a Time",
    image: "service_img/horse.png",
  }
];

const Data = (petCare) => {
  return (
    <div className='pet-care'>
      
        <img src={petCare.image} alt="" />
        <h1>{petCare.headLine}</h1>
        <p>{petCare.textContent}</p>
      
    </div>
  )
}

const Precaution = () => {
  return (
    <div className='pets-carepage'>
      {precautionData.map((a) => <Data image={a.image} headLine={a.headLine} textContent={a.textContent} />)}

    </div>
  )
}



export default Precaution