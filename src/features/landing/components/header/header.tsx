import React, { useState } from 'react';
import './header.sass';
import burgerIcon from '../../../../assets/img/burger.svg';

export interface HeaderProps {
  
}
 
const Header: React.SFC<HeaderProps> = (props) => {

  const [ activeTab, setActiveTab ] = useState(1);
  const [ showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = (): void => setShowMobileMenu(!showMobileMenu);

  const toggleActive = (i: number): void => {
    setActiveTab(i);
    setTimeout(() => setShowMobileMenu(false), 230);
  }

  const isActive = (i: number): boolean => activeTab === i;
  
  return (
    <header className="header">
      <section className="wrapper-nav-bar">
        <div className="logo-container">
          <div className="logo">Julian</div>
        </div>
        <div className="mobile-burger-icon" onClick={() => {toggleMobileMenu()}}>
          <img src={burgerIcon} alt="Burger menu"/>
        </div>
        <nav className={`nav ${showMobileMenu ? 'show' : ''}`}>
          <span onClick={() => {toggleActive(1)}} className={`link ${isActive(1) ? 'active' : ''}`}>Home</span>
          <span onClick={() => {toggleActive(2)}} className={`link ${isActive(2) ? 'active' : ''}`}>About</span>
          <span onClick={() => {toggleActive(3)}} className={`link ${isActive(3) ? 'active' : ''}`}>Service</span>
          <span onClick={() => {toggleActive(4)}} className={`link ${isActive(4) ? 'active' : ''}`}>Blog</span>
          <span onClick={() => {toggleActive(5)}} className={`link ${isActive(5) ? 'active' : ''}`}>Portfolio</span>
          <span className={`link main-button`}>Contact</span>
        </nav>
      </section>
    </header>
  );
}
 
export default React.memo(Header);