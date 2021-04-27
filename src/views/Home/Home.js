import React, { Component } from 'react';

//import CSSModules from 'react-css-modules';
//import styles from './Home.css';
import Hero from './HomeContainers/Hero/Hero';

class Home extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div styleName="bkgd">
                <Hero/>
            </div>
        )
    }
};

export default Home;