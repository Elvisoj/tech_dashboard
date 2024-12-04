import React, { useContext } from 'react'
import { AppContext } from '../../AppContext/DashboardContext'

function ViewAllPost() {
  const { AllPostIcon, setIsDisplayPost, isDisplayPost } = useContext(AppContext);
  return (
    <div className='view-allpost box' onClick={()=> setIsDisplayPost(!isDisplayPost)}>
      <div className="view-allpost-container">
        <img src={AllPostIcon} alt="AllPostIcon.png" />
        <h2>View Posts</h2>
      </div>
    </div>
  )
}

export default ViewAllPost
