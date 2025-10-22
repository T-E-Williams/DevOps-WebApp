import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-6xl font-bold text-black-600 mb-4">DevOps</h1>
      <button type="submit"
        onClick={() => navigate('/about')}
        className="px-6 py-2 bg-black-600 text-black bg-gray-600 hover:cursor-pointer focus:bg-gray-700 rounded-lg hover:bg-black-700 transition">
        Go to About Page
      </button>
    </div>
  )
}

export default Home
