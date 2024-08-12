import React, { useState } from 'react'
import data from './data';

export default function App() {
  const [tours, setTours] = useState(data)
  return (
    <>
     {
      tours.map(tour => (
        <div key={tour.id}>
          <div><img src={tour.image} alt=""/></div>
          <h6>Rs. {tour.price}</h6>
          <h5>{tour.name}</h5>
        </div>
      ) )
     }
    </>
  )
}
