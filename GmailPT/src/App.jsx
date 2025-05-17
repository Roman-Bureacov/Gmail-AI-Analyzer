//import { useState } from 'react'
import './App.css'
import Header from './Component/Header'

function App() {
  //const [count, setCount] = useState(0)

    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    //const API_KEY = process.env.API;

    console.log(CLIENT_ID);

  return (
    <>
      <Header/>
    </>
  )
}

export default App
