import React,{useState} from 'react'
import { arrData2 } from './data2'
import './style.scss'


const BodySecond = (props) => {
    const [data2,setData2]= useState(arrData2)

    return (
      <div className='container2'>
        {data2.map(el => {
          return (
            <div className='innerContainer' key={el.id}>
            <div className='img' style={{
              backgroundImage:`url('${el.img}')`
            }}/>
                <div className='elTitle'>
                  <h2>{el.title}</h2>
                  <p>{el.desc} </p>
                  <div className='elFooter'>
                    <img src='https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x' alt='/'  className='avatar'/>
                    <p> {el.name} <br/> {el.date} </p>
                    <div className='save' style={{backgroundImage:`url('${el.rightImg}')`}}/>
                    <div />
                  </div>
                </div>
            </div>
          )
        })}
      </div>
    )
  }
  export default BodySecond