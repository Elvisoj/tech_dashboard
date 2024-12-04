import React from 'react'
import '../Styles/sidebar.css'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-container">
        <div className="badge-wrapper"></div>
        <ul className='sidebar-menu'>
          <li className='sidebar-menu-item'>Plan</li>
          <li className='sidebar-menu-item'>Plan</li>
          <li className='sidebar-menu-item'>Plan</li>
          <li className='sidebar-menu-item'>Plan</li>
          <li className='sidebar-menu-item'>Plan</li>
        </ul>
        <div className="signout-wrapper">
          <button>SignOut Now!</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
