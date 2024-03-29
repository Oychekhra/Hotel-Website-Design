import React from 'react'
import ErrorPage from '../../Assets/404.jpg'
import { ErrorPages } from './style'
import { Link } from 'react-router-dom'


const PageNotfoundComponent = () => {
  return (
    <ErrorPages style={{backgroundImage: `url(${ErrorPage})`}}>
      <Link to="/"><button> GO BACK TO HOMEPAGE</button></Link>
    </ErrorPages>
  )
}

export default PageNotfoundComponent
