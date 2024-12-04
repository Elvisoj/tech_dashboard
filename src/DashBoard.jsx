import React from 'react'
import DashboardContext from './AppContext/DashboardContext'
import Header from './Section/Header'
import Sidebar from './Section/Sidebar'
import Main from './Section/Main'
import './/Styles/dashboard.css'





const DashBoard = () => {
  
  return (
    <DashboardContext>
      <div className="dashboard">
        <div className="dashboard-container">
          <Header />
          <Sidebar />
          <Main />
        </div>
      </div>
    </DashboardContext>
  )
}

export default DashBoard
