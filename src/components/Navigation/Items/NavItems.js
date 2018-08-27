import React from 'react';

import NavItem from './Item/NavItem';
import Logo from '../../Logo/Logo';
import Modal from '../../Modal/Modal';

const navItems = (props) => (
    <ul className="nav justify-content-center">
        <NavItem>ABOUT</NavItem>
        <NavItem>PROJECTS</NavItem>
        <NavItem> <Logo className="navbar-brand"/></NavItem>
        <NavItem>GALLERY</NavItem>
        <NavItem>CONTACT</NavItem>
        <Modal/>
    </ul>
)

export default navItems;




