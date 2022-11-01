import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/niklas-ekstein-848611202/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/niklas-ekstein" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/niklas.ekstein.73" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials