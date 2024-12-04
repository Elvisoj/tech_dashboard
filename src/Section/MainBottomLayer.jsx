import React, { useContext } from 'react'
import Form from './PopCard/Form'
import '../Styles/mainbottomlayer.css'
import PostSection from './PopCard/PostSection';
import { AppContext } from '../AppContext/DashboardContext';

function MainBottomLayer() {

  const { isDisplayPost, isFormActive, postToEdit } = useContext(AppContext);

  const isActive = false;
  return (
    <>
      {isFormActive && <Form />}
      {isDisplayPost && <PostSection />}
      
    </>
      
    
  )
}

export default MainBottomLayer
