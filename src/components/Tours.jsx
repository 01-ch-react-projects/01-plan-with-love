import React from 'react'
import Card from '../components/Card'
export default function Tours({tours, removeTour}) {
  return (
    <>
        <div className='container'>
            <div className='cards'>
            {
                tours.map(tour => <Card key={tour.id} {...tour}  removeTour={removeTour}/> )
            }
            </div>
        </div>
    </>
  )
}





/*
Note:
{
    tours.map(tour => <Card key={tour.id} {...tour}/> ) //destruture then pass
}
                                OR
{
    tours.map(tour => <Card key={tour.id} tour={tour}/> ) 
}





Note: 

way-1(explicit return if use {})
{ 
    tours.map(tour => {
        return (<Card key={tour.id} {...tour}/>) 
    }) 
}
                OR

way-2(implicit return if use ())
{
    tours.map(tour => (<Card key={tour.id} {...tour}/>) )
}

*/

