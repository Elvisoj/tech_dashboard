import React from 'react'
import '../Styles/main.css'
import MainBottomLayer from './MainBottomLayer'
import MainTopLayer from './MainTopLayer'


const Main = () => {
  return (
    <div className='main'>
      <div className="main-container">
        <MainTopLayer />
        <MainBottomLayer />
      </div>
    </div>
  )
}

export default Main