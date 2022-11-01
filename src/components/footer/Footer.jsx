import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#experience">My Skills</a></li>
        <li><a href="#services">Work</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/niklas-ekstein-848611202/"><BsLinkedin/></a>
        <a href="https://github.com/niklas-ekstein"><FaGithub/></a>
        <a href="https://www.facebook.com/niklas.ekstein.73"><FaFacebookF/></a>
      </div>

    </footer>
  )
}

export default Footer