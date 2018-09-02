import React, { Component } from 'react';
import styles from './About.css';
import CSSModules from 'react-css-modules';
import Image from '../../components/Image/Image';

class About extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div styleName="about" className="container">
                <span className="container">
                        <h1>
                            About
                        </h1>
                </span>
                <h2>Hey, I'm Bill!</h2>
                <div className="row">
                    <p>I'm a 19 year old Management Engineering Major at the University of Waterloo.</p>
                </div>
                <div className="row">
                    <Image width="600px" path="waterloo-engineering.png" />
                </div>
                <div className="row">
                    <p>The University of Waterloo features Canada's largest engineering school. The school's reputation revolves around its production of excellence through engineering's world-famous co-op program.</p>
                </div>
            </div>
        )
    }
};


export default CSSModules(About, styles);