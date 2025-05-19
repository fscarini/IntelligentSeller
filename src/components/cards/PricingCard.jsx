import React from 'react'

const PricingCard = (props) => {
    return (
        <div className="col-md-5 mt-2">
            <h2 className='d-flex justify-content-center mb-3'>{props.plan}</h2>
            <div className="rounded shadow card border-primary">
                <div className="card-header p-4" style={{ backgroundColor: '#354EAD', color: '#FFFFFF',}}>
                    <h2 className="mb-3">{props.title}</h2>
                </div>
                <div className="card-body">
                    <p className="mb-2">{props.vantage1}</p>
                    <p className="mb-2">{props.vantage2}</p>
                    <p className="mb-2">{props.vantage3}</p>
                    <h3 className="mb-4 mt-4">{props.price}</h3>
                    <button className="btn btn-primary">Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default PricingCard