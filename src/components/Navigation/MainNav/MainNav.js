import React, {Component} from 'react';

import classes from './MainNav.css'
import NavItems from '../Items/NavItems';
import CSSModules from 'react-css-modules';


class mainNav extends Component {

    state = {
        navTop: true
    }

    navChangeHandler = () => {
        const mainNav = document.getElementById('mainNav');
        mainNav.classList.toggle('navScroll');
        console.log('navchangehandler');
        this.state.navTop === false ? this.setState({navTop: true}) : this.setState({navTop: false});
    };

    render() {

        console.log(this.state.navTop);

        const topStyle = {
            padding: '15px',
            zIndex: '900',
            position: 'fixed',
            width: '100%',
            margin: '0 auto !important',
            top: 0,
            backgroundColor: 'white',
            color: 'white !important'
        }


        return (
            <nav id="mainNav" style={topStyle} >
                <span>
                    <NavItems/>
                </span>
            </nav>
        )
    }
} 

export default CSSModules(mainNav, classes, {allowMultiple: true});