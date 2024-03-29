import React from 'react'
import { Arrowbutton, Testimonial } from './style'
import arrowleft from '../../Assets/arrowleft.png'
import arrowright from '../../Assets/arrowright.png'

const TestimonialsComponent = () => {
  return (
    <Testimonial>
       <h3>Testimonials</h3>
        <p>"Calm, Serene, Retro -What a way to relax and enjoy"</p>
        <p>Mr. and Mrs. Baxter, UK</p>
        <Arrowbutton>
          <div><img src={arrowleft} alt="" /></div>
          <div><img src={arrowright} alt="" /></div>
        </Arrowbutton>
    </Testimonial>
  )
}

export default TestimonialsComponent
