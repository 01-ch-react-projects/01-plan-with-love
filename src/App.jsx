import React, { useState } from 'react'
import data from './data';
import Tours from './components/Tours';
import './App.css';

export default function App() {
  const [tours, setTours] = useState(data)

  let removeTour=(id)=>{
    const newTours=tours.filter((tour) => tour.id !==id);
    setTours(newTours);
  }

  return (
    <>
    <div className='App'>
        <h1>Plan With Love</h1>
        <Tours tours={tours} removeTour={removeTour}/>
     </div>
    </>
  )
}
