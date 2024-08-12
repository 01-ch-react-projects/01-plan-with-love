import React, { useState } from 'react'
import data from './data';
import Tours from './components/Tours';

export default function App() {
  const [tours, setTours] = useState(data)
  return (
    <>
     <Tours tours={tours}/>
    </>
  )
}
