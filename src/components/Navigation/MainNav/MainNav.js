import React, {Component} from 'react';

import classes from './MainNav.css'
import CSSModules from 'react-css-modules';
import Logo from '../../Logo/Logo';
import {NavLink} from 'react-router-dom'; 

class MainNav extends Component {

    state = {
        navTop: true
    }

    navChangeHandler = () => {
        this.state.navTop === false ? this.setState({navTop: true}) : this.setState({navTop: false});
    };

    render() {

        let topStyle = {
            padding: '10px',
            zIndex: '900',
            position: 'fixed',
            width: '99vw',
            margin: '0 auto !important',
            top: 0,
            backgroundColor: 'white',
            color: 'white !important',
            transition: 'box-shadow 0.5s'
        }

        if(this.state.navTop === false) {
            topStyle = {
                padding: '10px',
                zIndex: '900',
                position: 'fixed',
                width: '99vw',
                margin: '0 auto !important',
                top: 0,
                backgroundColor: 'white',
                color: 'white !important',
                boxShadow: '0 0 40px #ccc',
                transition: 'box-shadow 0.2s'
            }
        }        

        return (
            <nav styleName="mainNav" id="mainNav" style={topStyle} >
                <span>
                    <ul className="nav justify-content-center">
                        <li styleName="nav-item-parent" className="nav-item" >
                            <NavLink to="/my-story" styleName='btnNav' className="nav-link">MY STORY</NavLink>
                        </li>
                        <li styleName="nav-item-parent" className="nav-item" >
                            <NavLink to="/projects" styleName='btnNav' className="nav-link">PROJECTS</NavLink>
                        </li>
                        <li styleName="nav-item-parent" className="nav-item" >
                            <NavLink to="/"styleName='btnNav' className="nav-link"><Logo height="70px" className="navbar-brand"/></NavLink>
                        </li>
                        <li styleName="nav-item-parent" className="nav-item" >
                            <NavLink to="/gallery" styleName='btnNav' className="nav-link">GALLERY</NavLink>
                        </li>
                        <li styleName="nav-item-parent" className="nav-item" >
                            <a to="/" styleName='btnNav' className="nav-link" onClick = {this.props.modalOpen}>CONTACT</a>
                        </li>
                    </ul>    
                </span>
            </nav>
        )
    }
} 

export default CSSModules(MainNav, classes, {allowMultiple: true});