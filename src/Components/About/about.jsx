import React from 'react'
import { Button, Buttondiv, MainContainer, MottoWrapper, Scroll } from './style'
import BookingIcon from '../../Assets/booking_logo.png'
import ScrollIcon from '../../Assets/scrool_btn.png'

const AboutComponent = () => {
  return (
    <MainContainer>
      <MottoWrapper>
        <p style={{fontSize:"50px"}}>WELCOME TO</p>
        <h3 style={{fontSize:"154px",letterSpacing:"10.78px"}}>LUXURY</h3>
        <h3 style={{fontSize:"60px", letterSpacing:"24px"}}>HOTELS</h3>
        <p style={{fontSize:"25px", letterSpacing:"2.5px"}}>Book your stay and enjoy Luxury <br/> redefined at the most affordable rates.</p>
      </MottoWrapper>
      <Buttondiv>
      <Button $primary>
        <img src={BookingIcon} alt=" Booking Icon" />
        <p>BOOK NOW</p>
      </Button>
      <Scroll>
        <p>Scroll</p>
        <img src={ScrollIcon} alt=" Booking Icon" />
      </Scroll>
      </Buttondiv>
    </MainContainer>
  )
}

export default AboutComponent;
