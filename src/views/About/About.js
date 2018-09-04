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
                {/* <div styleName="stripe"></div>
                <div styleName="stripe-reflected"></div> */}
                <span className="container">
                        <h1>
                            About
                        </h1>
                </span>

                <div styleName="content-div">
                    <h2>Hey, I'm Bill!</h2>
                    <div className="row">
                        <p>I'm a 19 year old Management Engineering Major at the University of Waterloo.</p>
                    </div>
                    <div className="row">
                        <Image width="600px" path="waterloo-engineering.png" />
                    </div>
                    <div className="row">
                        <p>The University of Waterloo features Canada's largest engineering school.</p>
                    </div>
                    <div className="row">
                        <p>I am interested in: </p>
                        <p>Web Development</p>
                        <p>Mobile Development</p>
                        <p>Data Science</p>
                    </div>
                    <div className="row">
                        <p>Throughout my future work terms, I would like to explore: </p>
                        <p>Software Engineering</p>
                        <p>Data Science</p>
                        <p>Product Management</p>
                    </div>
                    <div className="row">
                        <p>My Skills: </p>
                    </div>
                    <div className="row">
                        <p>In my spare time, I enjoy </p>
                        <p>Sports + Fitness</p>
                        <p>Guitar</p>
                        <p>Cooking</p>
                    </div>
                    <div className="row">
                        <p>I love to watch sports, including: </p>
                        <p>NCAAFB</p>
                        <p>NHL</p>
                        <p>NFL</p>
                    </div>
                </div>
            </div>
        )
    }
};


export default CSSModules(About, styles);