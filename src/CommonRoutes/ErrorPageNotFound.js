import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPageNotFound = () => {
  return (
    <div>
        <p style={{textAlign:'center',fontFamily:'sans-serif',fontSize:'30px'}}>OOPS! This is not the page you are looking for</p>
        <Link to='/about'>Go back to Home</Link>
        </div>
  )
}

export default ErrorPageNotFound