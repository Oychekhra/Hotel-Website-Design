import React from 'react'
import HomeImage from '../../Assets/facilities.png'
import AboutComponent from '../About/about'
import { FacilitiesInfo, SecondTitle } from './style'
import GYM from '../../Assets/gym.png'
import PoolsideBar from '../../Assets/poolside_bar.png'
import SPA from '../../Assets/spa.png'
import SwimmingPool from '../../Assets/swimmingpool.png'
import Restaurant from '../../Assets/restaurant.png'
import Laundry from '../../Assets/laundry.png'
import TestimonialsComponent from '../About/testimonials'
import { ImageWrapper } from '../Rooms/style'

const FacilitiesComponent = () => {
  return (
    <div>
        <div style={{backgroundImage: `url(${HomeImage})`}}>
          <AboutComponent/>
        </div>
        <SecondTitle>
          <h3>FACILITIES</h3>
          <p>We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so 
          that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
          and our modern luxury resort facilities will help you enjoy the best of all. </p>
        </SecondTitle>
        <FacilitiesInfo>
          <ImageWrapper src={GYM} alt="" />
          <p>THE GYM</p>
        </FacilitiesInfo>
        <FacilitiesInfo>
          <ImageWrapper src={PoolsideBar} alt="" />
          <p>POOLSIDE BAR</p>
        </FacilitiesInfo>
        <FacilitiesInfo>
          <ImageWrapper src={SPA} alt="" />
          <p>THE SPA</p>
        </FacilitiesInfo>
        <FacilitiesInfo>
          <ImageWrapper src={SwimmingPool} alt="" />
          <p>SWIMMING POOL</p>
        </FacilitiesInfo>
        <FacilitiesInfo>
          <ImageWrapper src={Restaurant} alt="" />
          <p>RESTAURANT</p>
        </FacilitiesInfo>
        <FacilitiesInfo>
          <ImageWrapper src={Laundry} alt="" />
          <p>LAUNDRY</p>
        </FacilitiesInfo>
        <TestimonialsComponent />
    </div>
  )
}

export default FacilitiesComponent
