import React from 'react'
import HomeImage from '../../Assets/rooms.png'
import AboutComponent from '../About/about'
import { SecondTitle } from '../Facilities/style'
import { CostInfo, CostInfoLeft, ImageWrapper, RoomInfo, RoomType, RoundWrapper } from './style'
import SingleRoom from '../../Assets/single_room.png'
import DoubleRoom from '../../Assets/double_room.png'
import TwinRoom from '../../Assets/twin_room.png'
import Round from '../../Assets/round.png'
import MORE from '../../Assets/more_icon.png'
import TestimonialsComponent from '../About/testimonials'

const RoomsComponent = () => {
  return (
    <div>
        <div style={{backgroundImage: `url(${HomeImage})`}}>
          <AboutComponent />
        </div>
        <SecondTitle>
          <h3>ROOMS AND RATES</h3>
          <p>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, 
          comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented 
          by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>
        </SecondTitle>
        <RoomInfo>
          <ImageWrapper src={SingleRoom} alt="" />
          <RoundWrapper src={Round} alt="" />
          <RoomType>SINGLE ROOM</RoomType>
          <CostInfo>
            <CostInfoLeft>
            <img src={MORE} alt="" />
            <p>VIEW MORE DITAILS</p>
            </CostInfoLeft>
            <button> $147 Avg/night</button>
          </CostInfo>
        </RoomInfo>
        <RoomInfo>
          <ImageWrapper src={DoubleRoom} alt="" />
          <RoundWrapper src={Round} alt="" />
          <RoomType>DOUBLE ROOM</RoomType>
          <CostInfo>
            <CostInfoLeft>
            <img src={MORE} alt="" />
            <p>VIEW MORE DITAILS</p>
            </CostInfoLeft>
            <button> $147 Avg/night</button>
          </CostInfo>
        </RoomInfo>
        <RoomInfo>
          <ImageWrapper src={TwinRoom} alt="" />
          <RoundWrapper src={Round} alt="" />
          <RoomType>TWIN ROOM</RoomType>
          <CostInfo>
            <CostInfoLeft>
            <img src={MORE} alt="" />
            <p>VIEW MORE DITAILS</p>
            </CostInfoLeft>
            <button> $147 Avg/night</button>
          </CostInfo>
        </RoomInfo>
        <TestimonialsComponent />
    </div>
  )
}

export default RoomsComponent
