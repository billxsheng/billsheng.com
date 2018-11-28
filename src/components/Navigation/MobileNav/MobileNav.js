import React, {Component} from 'react';

import classes from './MobileNav.css'
import CSSModules from 'react-css-modules';
import Logo from '../../Logo/Logo';
import {NavLink} from 'react-router-dom'; 

class mobileNav extends Component {

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
            transition: 'transform 0.2s',
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
                transition: 'transform 0.2s',
            }
        }        


        return (
            <div style={topStyle} styleName = "mobileNav" id="mobileNav">
                <div styleName="item-row" className="row">
                    <NavLink to="/about" styleName="mobile-nav-item" className="col-sm-3"> 
                        <i className="icon ion-md-person"></i>
                        <p>About</p>
                    </NavLink>
                    <NavLink to="/projects" styleName="mobile-nav-item" className="col-sm-3"> 
                        <i className="icon ion-ios-rocket"></i>
                        <p>Projects</p>
                    </NavLink>
                    <NavLink to="/gallery" styleName="mobile-nav-item" className="col-sm-3"> 
                        <i className="icon ion-md-image"></i>
                        <p>Gallery</p>
                    </NavLink>
                    <a onClick = {() => {
                        this.props.modalOpen();
                        this.closeNav();
                    }} styleName="mobile-nav-item" className="col-sm-3">
                        <i className="icon ion-md-hand"></i> 
                        <p>Contact</p>
                    </a>
                </div>
                <div>
                    <NavLink to="/" styleName='logo' className="nav-link"><Logo height="70px" /></NavLink>
                    <a onClick = {this.navHandler} ><i  styleName="menu" className = "icon ion-ios-menu"></i></a>
                </div>
            </div>
        )
    }
} 

export default CSSModules(mobileNav, classes, {allowMultiple: true});