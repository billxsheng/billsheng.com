import React from 'react';

import NavItem from './Item/NavItem';
import Logo from '../../Logo/Logo';

const navItems = (props) => (
    <ul className="nav justify-content-center">
        <NavItem>ABOUT</NavItem>
        <NavItem>PROJECTS</NavItem>
        <NavItem> <Logo className="navbar-brand"/></NavItem>
        <NavItem>GALLERY</NavItem>
        <NavItem dataTarget = "#contactModal" dataToggle="modal" >CONTACT</NavItem>
    </ul>
)

export default navItems;




