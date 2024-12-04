import React, { useContext } from 'react'
import { AppContext } from '../../AppContext/DashboardContext'

function CreatePost() {
  const { AddIcon, isFormActive, setIsFormActive, setFormState, formStateData} = useContext(AppContext);
  
  return (
    <div className='create-post box'>
        <div className="create-post-btn" onClick={()=> {
          setIsFormActive(!isFormActive)
          setFormState(formStateData)
        }}>
            <p className="icon">
              <img src={AddIcon} alt="AddIcon" />
            </p>
            <p className='text'>Create Post</p>
        </div>
      
    </div>
  )
}

export default CreatePost
