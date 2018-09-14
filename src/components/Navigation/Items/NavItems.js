import React from 'react';

import NavItem from './Item/NavItem';
import Logo from '../../Logo/Logo';

const navItems = (props) => (
    <ul className="nav justify-content-center">
        <NavItem link="/about" >ABOUT</NavItem>
        <NavItem link="/projects" >PROJECTS</NavItem>
        <NavItem link="/" ><Logo height="70px" className="navbar-brand"/></NavItem>
        <NavItem link="/gallery" >GALLERY</NavItem>
        <NavItem link="/" dataTarget = "#contactModal" dataToggle="modal" >CONTACT</NavItem>
    </ul>
)

export default navItems;




