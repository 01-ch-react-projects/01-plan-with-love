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

  if(tours.length===0){
    return (
      <div className="refresh">
        <h2>No tour left</h2>
        <a class="btn btn-primary" onClick={()=> setTours(data)}>Refresh</a>
      </div>
    );
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
