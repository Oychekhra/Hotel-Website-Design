import React from 'react'
import HomeImage from '../../Assets/home.png'
import AboutComponent from '../About/about'
import TestimonialsComponent from '../About/testimonials'
import { Advantages, FirstTitle, HomeWrapper, Info } from './style'
import { Button } from '../About/style'
import VerLine from '../../Assets/verline.png'
import VerLine2 from '../../Assets/verline2.png'
import HotelRoom from '../../Assets/home_room.png'
import SeaView from '../../Assets/home_sea.png'


const HomeComponent = () => {
  return (
    <HomeWrapper>
       <div style={{backgroundImage: `url(${HomeImage})`}}>
        <AboutComponent />
       </div>
       <FirstTitle>All our room types including complementary breakfast</FirstTitle>
       <Advantages>
        <img src={VerLine} alt='Vertical Line'/>
        <Info>
          <h3 style={{fontSize:'60px', letterSpacing:'1.2px'}}>Luxury redefined</h3>
          <p style={{fontSize:'25px', lineHeight:'40px'}}>Our rooms are designed to transport 
          you  into an environment made for leisure. 
          Take your mind off the day-to-day of home 
          life and find a private paradise for yourself.</p>
          <Button><p>Explore</p></Button>
        </Info>
        <img src={HotelRoom} alt='Room View' style={{width:"50%"}}/>
       </Advantages>
       <Advantages>
        <img src={VerLine2} alt='Vertical Line'/>
        <Info>
          <h3 style={{fontSize:'60px', letterSpacing:'1.2px'}}>Leave your worries in the sand</h3>
          <p style={{fontSize:'25px', lineHeight:'40px'}}>We love life at the beach. Being close
          to the ocean with access to endless sandy
          beach ensures a relaxed state of mind. It 
          seems like time stands still watching the 
          ocean. </p>
          <Button><p>Explore</p></Button>
        </Info>
        <img src={SeaView} alt='Sea View' style={{width:"50%"}}/>
       </Advantages>
       <TestimonialsComponent />
    </HomeWrapper>
  )
}

export default HomeComponent
