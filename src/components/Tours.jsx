import React from 'react'
import Card from '../components/Card'
export default function Tours({tours}) {
  return (
    <>
        {
            tours.map(tour => ( <Card key={tour.id} {...tour}/> ) )
        }
    </>
  )
}


