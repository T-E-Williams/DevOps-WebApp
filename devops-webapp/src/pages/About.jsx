import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <div className="about">
      <h1>About Page</h1>
      <p>This is an example second page for the DevOps project.</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default About
