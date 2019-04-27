import React, {Component} from 'react';

import classes from './MobileNav.css'
import CSSModules from 'react-css-modules';
import Logo from '../../Logo/Logo';
import {NavLink} from 'react-router-dom'; 
import Icon from '../../Icon/Icon';

class MobileNav extends Component {

    state = {
        navOpen: false
    }

    navHandler = () => {
        this.state.navOpen === false ? this.setState({navOpen: true}) : this.setState({navOpen: false});
    }

    closeNav = () => {
        this.setState({navOpen: false});
    }

    render() {

        let topStyle = {
            zIndex: '900',
            position: 'fixed',
            width: '100vw',
            margin: '0 auto !important',
            top: 0,
            backgroundColor: 'white',
            color: 'white !important',
            boxShadow: '0 0 20px #ccc',
            transition: 'all 200ms cubic-bezier(0.1, 0, 0.1, 1) 0s'
        }

        if(this.state.navOpen) {
            topStyle = {
                zIndex: '900',
                position: 'fixed',
                width: '100vw',
                margin: '0 auto !important',
                top: 0,
                backgroundColor: 'white',
                color: 'white !important',
                boxShadow: '0 0 20px #ccc',
                transform: 'translateY(0)',
                transition: 'all 200ms cubic-bezier(0.1, 0, 0.1, 1) 0s'
            }
        }        


        return (
            <div style={topStyle} styleName = "mobileNav" id="mobileNav">
                <div styleName="item-row" className="row">
                    <NavLink to="/my-story" styleName="mobile-nav-item" className="col-sm-3"> 
                        <Icon iconName= "fas fa-user-circle" iconType="iconMenu"/>
                        <p>My Story</p>
                    </NavLink>
                    <NavLink to="/projects" styleName="mobile-nav-item" className="col-sm-3"> 
                        <Icon iconName= "fas fa-rocket" iconType="iconMenu"/>
                        <p>Projects</p>
                    </NavLink>
                    <NavLink to="/gallery" styleName="mobile-nav-item" className="col-sm-3"> 
                        <Icon iconName= "fas fa-book" iconType="iconMenu"/>
                        <p>Gallery</p>
                    </NavLink>
                    <a onClick = {() => {
                        this.props.modalOpen();
                        this.closeNav();
                    }} styleName="mobile-nav-item" className="col-sm-3">
                        <Icon iconName= "fas fa-handshake" iconType="iconMenu"/>
                        <p>Contact</p>
                    </a>
                </div>
                <div>
                    <NavLink to="/" styleName='logo' className="nav-link"><Logo height="70px" /></NavLink>
                    <a onClick = {this.navHandler} >
                        <Icon iconName= "fas fa-bars" iconType="iconHamburger"/>
                    </a>
                </div>
            </div>
        )
    }
} 

export default CSSModules(MobileNav, classes, {allowMultiple: true});