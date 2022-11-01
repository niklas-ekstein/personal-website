import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../../index.css'

const Fader2 = ({ text }) => {


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
        }, 2000);
   return () => clearInterval(timeout)
   }, [fadeProp])
    

  return (
    <>
      <h5 className={fadeProp.fade}>{text}</h5>  
    </>
  )
}

Fader2.defaultProps = {
    text: 'Fullstack Developer'
}

Fader2.propTypes = {
    text: PropTypes.string,
}

export default Fader2