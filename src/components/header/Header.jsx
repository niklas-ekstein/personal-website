import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import video from '../../assets/Marstrand2.mp4'
import Fader from '../fader/Fader'
import Fader2 from '../fader/Fader2'

const Header = () => {
  return (
    <header>
      <div className='main'>
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted/>
      <div className="content">

      <Fader2></Fader2>

        <Fader></Fader>
        
        <CTA />
        <HeaderSocial />

        </div>

      </div>
    </header>
  )
}

export default Header
