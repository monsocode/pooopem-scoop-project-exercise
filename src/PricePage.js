import React from 'react'
const priceData = [
    {
        price: "$ 15",
        service: "✔️ One cleaning weekly",
        cta: "GET STARTED"
    },
    {
        price: "$ 20",
        service: "✔️ two cleaning weekly",
        cta: "GET STARTED"
    },
    {
        price: "$ 25",
        service: "✔️ biweekly",
        cta: "GET STARTED"
    },
    {
        price: "$ 30",
        service: "✔️ monthly cleaning",
        cta: "GET STARTED"
    }
]

// child component (price component)
const Price = (props) => {
    return (
        <div className='each-package'>
            <h1 className='price'>{props.price}</h1>
            <p>{props.service}</p>
            <a href="">{props.cta}</a>
        </div>
    )
}


//parent component(pricepage component)
const PricePage = () => {
    return (
        <div className='care-packagepage'>
            <h1>Dog Waste Clean Up packages</h1>
            <p>Price & Plans</p>
            <div className='packages'>
                {priceData.map((packages) =>
                    <Price price={packages.price} service={packages.service} cta={packages.cta} />
                )}

                {/* <div>
                    <h1>$ 15</h1>
                    <p>✔️ One cleaning weekly</p>
                    <a href="#">GET STARTED</a>
                </div>
                <div>
                    <h1>$ 20</h1>
                    <p>✔️ Two cleanings weekly</p>
                    <a href="#">GET STARTED</a>
                </div>
                <div>
                    <h1>$ 25</h1>
                    <p>✔️ Biweekly</p>
                    <a href="#">GET STARTED</a>
                </div>
                <div>
                    <h1>$ 30</h1>
                    <p>✔️ Once a month</p>
                    <a href="#">GET STARTED</a>
                </div> */}
            </div>
        </div>
    )
}

export default PricePage