import React from 'react'

export default function Card({id,image,info, price, name}) {
  return (
    <>
            <div className="card" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h6 className="card-title" style={{color:"green"}}>Rs. {price}</h6>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {info}
                        <span className='readmore'>show less</span>
                    </p>
                    <a className="btn btn-outline-danger">Not Interested</a>
                </div>
            </div>
    
    </>
  )
}
