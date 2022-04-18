import React from 'react';
import { ABCLogo, HRCLogo } from "../assets/assets";

export default function Header() {
  return (
    <header className='tc'>
      <img src={ABCLogo} alt="ABCLogo" />
      <img src={HRCLogo} alt="HighRadius" />
    </header>
  )
}