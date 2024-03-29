import React from 'react'
import {Route, Routes, useLocation } from 'react-router-dom'
import HomeComponent from './Components/Home/home'
import FacilitiesComponent from './Components/Facilities/facilities'
import RoomsComponent from './Components/Rooms/rooms'
import ContactComponent from './Components/Contacts/contact'
import Navbar from './Components/Navbar/navbar'
import FooterComponent from './Components/Footer/footer'
import LoginComponent from './Components/Auth/login'
import PageNotfoundComponent from './Components/404/pagenotfound'

const RouterComponent = () => {
  const location =useLocation();

  const showNavFooterNavigate = location.pathname !=="*"  && location.pathname !=="/login";
  return (
    <>
    {showNavFooterNavigate && <Navbar />}
    <Routes>
        <Route path='/' element= {<HomeComponent />}/>
        <Route path='/facilities' element={<FacilitiesComponent />} />
        <Route path='/rooms' element={<RoomsComponent/>} />
        <Route path='/contact-us' element={<ContactComponent/>} />
        <Route path='/login' element={<LoginComponent/>}/>
        <Route path="*" element={ <PageNotfoundComponent />} />
    </Routes>
    {showNavFooterNavigate && <FooterComponent/>}
    </>
  )
}

export default RouterComponent
