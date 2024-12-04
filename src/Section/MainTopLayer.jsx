import React from 'react'
import Analysics from './Cards/Analysics'
import CreatePost from './Cards/CreatePost'
import UserProfile from './Cards/UserProfile'
import ViewAllPost from './Cards/ViewAllPost'
import '../Styles/maintoplayer.css'

function MainTopLayer() {
  return (
    <div className='main-top-layer'>
      <div className="boxes-wrapper">
        <UserProfile />
        <CreatePost />
        <Analysics />
        <ViewAllPost />
      </div>
    </div>
  )
}

export default MainTopLayer
