import React, { useState } from 'react'
import '../../Styles/SettingMenu.css'

function SettingMenu() {
    const [ bgLight, setBgLight ] = useState(true);
    const root = document.querySelector(":root")
    const handleBgColor = ()=>{
        if(bgLight){
            root.style.setProperty("--pry-bg-clr", "#01050f")
            root.style.setProperty("--sec-bg-clr", "#000716")
            root.style.setProperty("--pry-tx-clr", "#ffffff")
            root.style.setProperty("--sec-tx-clr", "#ffffff")
            root.style.setProperty("--card-bg-clr", "hwb(182 1% 71%)")
            setBgLight(!bgLight)
        } else{
            root.style.setProperty("--pry-bg-clr", "whitesmoke")
            root.style.setProperty("--sec-bg-clr", "#ffffff")
            root.style.setProperty("--pry-tx-clr", "#whitesmoke")
            root.style.setProperty("--sec-tx-clr", "#333333")
            root.style.setProperty("--card-bg-clr", "dcf5f8")
            setBgLight(!bgLight)

        }
    }
  return (
    <div className='setting-menu'>
      <div className="setting-menu-container">
        <div className="theme">
            <h2>Theme</h2>
            <div className={bgLight ? "color" : "color active"} onClick={handleBgColor}>
              <div className="theme-btn"></div>
            </div>
        </div>
        <ul>
            <li>Authetication</li>
            <li>Security</li>
            <li>Data Storage</li>
            <li>Page Setting</li>
            <li>Privacy Setting</li>

        </ul>
      </div>
    </div>
  )
}

export default SettingMenu 