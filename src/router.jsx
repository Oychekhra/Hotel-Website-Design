import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './Components/Home/home'
import FacilitiesComponent from './Components/Facilities/facilities'
import RoomsComponent from './Components/Rooms/rooms'
import ContactComponent from './Components/Contacts/contact'

const RouterComponent = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element= {<HomeComponent />}/>
        <Route path='/facilities' element={<FacilitiesComponent />} />
        <Route path='/rooms' element={<RoomsComponent/>} />
        <Route path='/contact-us' element={<ContactComponent/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent
