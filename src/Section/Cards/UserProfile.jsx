import React, { useContext } from 'react'
import { AppContext } from '../../AppContext/DashboardContext'

function UserProfile() {
  const { UserProfile } = useContext(AppContext);
  
  
  return (
    <div className='user-profile box'>
        <div className="user-profile-container">
            <div className="user-details">
                <img src={UserProfile} alt="" className="user-icon" />
                <p className="user-name">Elvis O. Jonathan</p>
                <p className="user-position">SoftWare Engineering</p>
            </div>
        </div>
      
    </div>
  )
}

export default UserProfile
