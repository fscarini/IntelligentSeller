import React from 'react'

const SmartSalesCard = (props) => {
    return (
        <div className="col-xl-6">
            <div className="card border border-dark">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>

    )
}

export default SmartSalesCard