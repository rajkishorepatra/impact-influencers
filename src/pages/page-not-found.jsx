import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='vh-100 d-flex flex-column align-items-center justify-content-center'>
      <h1 className="display-2">404</h1>
        <h2 className='h4'>Page not found </h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p> <Link to="/" className='btn btn-primary'> Go back to Home</Link></p>
    </div>
  )
}
