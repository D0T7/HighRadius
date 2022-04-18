import React from 'react';
import { ABCLogo, HRCLogo } from "../assets/assets";

import './Header.css';



function Header() {
  return (
    <header className='tc'>
        <img src = {ABCLogo} alt = "ABCLogo" />
        <img src = {HRCLogo} alt = "HighRadius" />
    </header>
  )
}
export default Header;