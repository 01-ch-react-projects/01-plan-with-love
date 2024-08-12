import React from 'react'

export default function Card({image, price, name}) {
  return (
    <>
        <div>
            <div><img src={image} alt=""/></div>
            <h6>Rs. {price}</h6>
            <h5>{name}</h5>
        </div>
    </>
  )
}
