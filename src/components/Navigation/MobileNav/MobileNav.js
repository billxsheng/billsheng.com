import React, {Component} from 'react';

import classes from './MobileNav.css'
import CSSModules from 'react-css-modules';
import Logo from '../../Logo/Logo';
import {NavLink} from 'react-router-dom'; 
import Icon from '../../Icon/Icon';

class mobileNav extends Component {

    state = {
        navTop: true
    }

    navChangeHandler = () => {
        const mainNav = document.getElementById('mainNav');
        mainNav.classList.toggle('navScroll');
        this.state.navTop === false ? this.setState({navTop: true}) : this.setState({navTop: false});
    };

    render() {

        let topStyle = {
            padding: '10px',
            zIndex: '900',
            position: 'fixed',
            width: '100vw',
            margin: '0 auto !important',
            top: 0,
            backgroundColor: 'white',
            color: 'white !important',
            boxShadow: '0 0 40px #ccc',
            transition: 'box-shadow 0.5s'
        }

        if(this.state.navTop === false) {
            topStyle = {
                padding: '10px',
                zIndex: '900',
                position: 'fixed',
                width: '100vw',
                margin: '0 auto !important',
                top: 0,
                backgroundColor: 'white',
                color: 'white !important',
                boxShadow: '0 0 40px #ccc',
                transition: 'box-shadow 0.2s'
            }
        }        


        return (
            <div style={topStyle} styleName = "mobileNav">
                <NavLink to="/"styleName='logo' className="nav-link"><Logo height="50px" className="navbar-brand"/></NavLink>
                <Icon iconType = "iconLarge"  iconName = ""></Icon>
            </div>
        )
    }
} 

export default CSSModules(mobileNav, classes, {allowMultiple: true});