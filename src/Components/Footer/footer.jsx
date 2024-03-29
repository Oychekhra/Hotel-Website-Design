import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../../Assets/facebook_logo.png'
import Twitter from '../../Assets/twitter_logo.png'
import Instagram from '../../Assets/instagram_logo.png'
import { FooterWrapper, InfoWrapper, SocialMedia, Traingle } from './style'

const FooterComponent = () => {
  return (
    <div>
        <Traingle>
            <div></div>
        </Traingle>
        <FooterWrapper>
      <InfoWrapper>
        <h2>LUXURY</h2>
        <h5>HOTELS</h5>
        <h6>497 Evergreen Rd. Roseville, CA 95673<br/>
        +44 345 678 903<br/>
        luxury_hotels@gmail.com</h6>
      </InfoWrapper>
      <InfoWrapper>
        <Link to="/" style={{textDecoration:"none",color:'white'}}><p>About Us</p></Link>
        <Link to="/contact-us" style={{textDecoration:"none",color:'white'}}><p>Contact</p></Link>
        <p>Terms & Conditions</p>
      </InfoWrapper>
      <InfoWrapper>
        <SocialMedia>
            <img src={Facebook} alt="Logo" />
            <p>Facebook</p>
        </SocialMedia>
        <SocialMedia>
            <img src={Twitter} alt="Logo" />
            <p>Twitter</p>
        </SocialMedia>
        <SocialMedia> 
            <img src={Instagram} alt="Logo" />
            <p>Instagram</p>
        </SocialMedia>
      </InfoWrapper>
      <InfoWrapper>
        <p>Subscribe to our newsletter</p>
        <form>
            <input type="text" placeholder="Search.." style={{color:'white'}}/>
            <button type="submit"> OK</button>
        </form>
      </InfoWrapper>
    </FooterWrapper>
    </div>
  )
}

export default FooterComponent
