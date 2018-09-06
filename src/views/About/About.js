import React, { Component } from 'react';
import styles from './About.css';
import CSSModules from 'react-css-modules';
import Image from '../../components/Image/Image';
import Link from '../../components/Button/Link/Link';
import AboutTile from './AboutTile/AboutTile';


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
                    {/* <div className="row">
                        <iframe width="420" height="315" src="https://www.youtube.com/embed/Zw6UpeFCeN0"></iframe>
                    </div> */}
                    <div className="row">
                        <p>Previously, I attended Markville Secondary School in my hometown of Markham, Ontario. <span>🇨🇦</span></p>
                    </div>
                    <h2>Interests</h2>
                    <div className="row">
                        <p>Web Development</p>
                        <p>Mobile Development</p>
                        <p>Data Science</p>
                    </div>
                    <div className="row">
                        <p>At Waterloo Engineering, students are given 6 co-op work terms on top of their academic requirements. 
                            During my first work term in summer 2018, I was an intern at Canadian Tire Corporation. Canadian Tire is one of 
                            Canada's largest retail organizations with services ranging from gas to finance.</p>                       
                    </div>
                    <div className="row">
                        <Image width="500px" path="canadian-tire-large.png" />
                    </div>
                    <div className="row">
                        <Link link="/projects">Learn More</Link>
                    </div>
                    <div className="row">
                        <p>I am currently looking for positions as a: </p>
                        <p>Software Engineer</p>
                        <p>Data Scientist</p>
                        <p>Product Manager</p>
                    </div>
                    <AboutTile iconName="fas fa-desktop" title="Web Development"/>
                    <div className="row">
                        <p>Skills</p>
                    </div>
                    <h2>Hobbies</h2>
                    <div className="row">
                        <p>Hobbies</p>
                        <p>Sports + Fitness</p>
                        <p>Guitar</p>
                        <p>Cooking</p>
                    </div>
                    <div className="row">
                        <p>Teams</p>
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