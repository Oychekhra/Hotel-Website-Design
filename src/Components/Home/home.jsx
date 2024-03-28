import React from 'react'
import Navbar from '../Navbar/navbar'
import HomeImage from '../../Assets/home.png'
import { MainContainer } from './homestyle'

const HomeComponent = () => {
  return (
    <MainContainer style={{backgroundImage: `url(${HomeImage})`}}>
        <Navbar />
      home
    </MainContainer>
  )
}

export default HomeComponent
