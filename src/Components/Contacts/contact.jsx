import React from 'react'
import { ContactInfo, ContactWrapper, HotelInfo, InquireWrapper, Wrapper } from './style'
import Arrow from '../../Assets/Arrow.png'

const ContactComponent = () => {
  return (
    <div>
      <ContactWrapper>
        <h1>CONTACT-US</h1>
    </ContactWrapper>
    <ContactInfo>
      <h3>WE ARE HERE FOR YOU</h3>
      <p>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, 
      please forward it to our support desk and we will get back to you as soon as possible.</p>
      <Wrapper>
      <HotelInfo>
        <p>497 Evergreen Rd.Roseville,
          CA 95673
        </p>
        <div style={{display:'flex', alignItems:'end'}}>
        <p style={{fontWeight:'700', paddingRight:'15px'}}>View map</p>
        <img src={Arrow} alt=""  style={{cursor:'pointer'}}/>
        </div>
        <p>Phone: +44 345 678 903</p>
        <p>Email:luxury_hotels@gmail.com</p>
      </HotelInfo>
      <InquireWrapper>
      <form>
        <label>Name</label>
        <input type="text"  name="firstname"/>

        <label>Email Address</label>
        <input type="text"  name="email address"/>

        <label>Message</label>
        <textarea  name="subject"  style={{height:'200px'}}></textarea>

        <button>Submit</button>

      </form>
      </InquireWrapper>
    </Wrapper>
    </ContactInfo>
    </div>
  )
}

export default ContactComponent
