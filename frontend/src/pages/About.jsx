import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className="text-xl flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-6xl font-bold text-black-600 mb-4">About Page</h1>
      <p>This is an example second page for the DevOps project.</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default About
