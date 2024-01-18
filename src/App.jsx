import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import supabase from './supabase'
import { Route, Routes } from 'react-router-dom';
import { Home } from './views';

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState(null)

  const url = 'http://localhost:8080/api/hello-world'

  async function getSupabase() {
    let { data: test, error } = await supabase
      .from('test')
      .select('*')
    if (error) {
      console.log(error)
      return
    }
    console.log(test[0].id)
  }

  async function getHelloWorld() {
    const req = {
      method: 'GET',
    }
    try {
      const response = await fetch(url, req);
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed');
      }
      const data = await response.json();
      console.log('after')
      console.log(data);
      setMessage(data.data)
    }
    catch (error) {
      console.log('failed')
      console.log(error);
    }
  }

  useEffect(() => {
    getHelloWorld()
    getSupabase()
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
