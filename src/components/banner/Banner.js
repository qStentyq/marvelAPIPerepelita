import React from 'react'
import './banner.scss'
import avengers from '../../resources/img/Avengers.png'
import avengersLogo from '../../resources/img/Avengers_logo.png'


export default function Banner() {
  return (
    <div className ="app__banner">
        <img src={avengers} alt="Avengers logo"/>
        <div className='app__banner-text'>New comics every week!<br/> Stay tuned!</div>
        <img src={avengersLogo} alt="avengers logo 2"/>
    </div>
  )
}
