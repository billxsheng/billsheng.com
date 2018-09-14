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

        let topStyle = {
            padding: '15px',
            zIndex: '900',
            position: 'fixed',
            width: '100%',
            margin: '0 auto !important',
            top: 0,
            backgroundColor: 'white',
            color: 'white !important',
            transition: 'box-shadow 0.5s'
        }

        console.log(this.state.navTop);
        if(this.state.navTop === false) {
            topStyle = {
                padding: '15px',
                zIndex: '900',
                position: 'fixed',
                width: '100%',
                margin: '0 auto !important',
                top: 0,
                backgroundColor: 'white',
                color: 'white !important',
                boxShadow: '0 0 40px #ccc',
                transition: 'box-shadow 0.2s'
            }
        }

        console.log(topStyle);
        


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