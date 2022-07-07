import React, { useState } from 'react'
import './style.scss'
import { arrData } from './data';
import Images from '../../assets/Image';


const BodyItem = (props) => {
  const [data , setData] = useState(arrData)

  return (
    <div className='container'>
      {data.map(item => {
        return (
          <div className='innerBlock' key={item.id}>
          <div className='img' style={{
            backgroundImage:`url('${item.img}')`
          }}/>
              <div className='itemTitle'>
                <h2>{item.title}</h2>
                <p>{item.desc} </p>
                <div className='itemFooter'>
                  <img src='https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x' alt='/'  className='avatar'/>
                  <p> {item.name} <br/> {item.date} </p>
                  <div className='save' style={{backgroundImage:`url('${item.rightImg}')`}}/>
                  <div />
                </div>
              </div>
          </div>
        )
      })}
    </div>
  )
}

export default BodyItem