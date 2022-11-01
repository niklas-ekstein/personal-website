import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../../index.css'

const Fader = ({ text }) => {


    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',

    });

    useEffect(() => {
        const timeout = setInterval(() => {
           if (fadeProp.fade === 'fade-out') {
              setFadeProp({
                   fade: 'fade-in'
              })
           }
        }, 3000);
   return () => clearInterval(timeout)
   }, [fadeProp])
    

  return (
    <>
      <h1 className={fadeProp.fade}>{text}</h1>  
    </>
  )
}

Fader.defaultProps = {
    text: 'Niklas Ekstein'
}

Fader.propTypes = {
    text: PropTypes.string,
}

export default Fader