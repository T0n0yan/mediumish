import React from 'react'
import Images from '../assets/Image/index'
import './style.scss'

const Nav = () => {
  return (
    <div className='nav'>
        <img src={Images.logo} alt="logo"  className='img'/>
            <div className='links'>
                <span className='s1'>Stories</span>
                <span className='s2'>Post</span>
                <span className='s3'>Author</span>
                <input type='text'  className='input'/>
            </div>
    </div>
  )
}

export default Nav