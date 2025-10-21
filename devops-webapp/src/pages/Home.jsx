import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css' // 👈 import the CSS file

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <h1>DevOps</h1>
      <button onClick={() => navigate('/about')}>
        Go to About Page
      </button>
    </div>
  )
}

export default Home
