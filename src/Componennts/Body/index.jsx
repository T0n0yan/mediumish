import React from 'react'
import BodyItem from './bodyItem'
import './style.scss'
import Images from '../assets/Image/index'

const Body = () => {
  return (
    <div className='body'>
        <h3 className='featers'>Featured</h3>
        <hr className='line' />
        <div className='bodyContainer'>
        <BodyItem/>
        </div>
    </div>
  )
}

export default Body