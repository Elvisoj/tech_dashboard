import { useContext } from 'react'
import { AppContext } from '../AppContext/DashboardContext'
import '../Styles/header.css'
import SettingMenu from './PopCard/SettingMenu';


const Header = () => {

  const data = useContext(AppContext);
  const { SettingIcon, UserIcon, isSettingActive, setIsSettingActive } = data;

  return (
    <div className='header'>
      <div className="header-container">
        <div className="logo-wrapper">
          
          <h2 className='logo'>Tech<span>nitol</span></h2>
        </div>
        <div className="menu-wrapper">
          <div className="menu">
            <img src={UserIcon} alt="" />
            <img src={SettingIcon} alt="" onClick={() => setIsSettingActive(!isSettingActive)} />
            {isSettingActive && <SettingMenu />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
