import React, { Component } from 'react';
import styles from './About.css';
import CSSModules from 'react-css-modules';
import Image from '../../components/Image/Image';
import Link from '../../components/Button/Link/Link';


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
                    <div className="row">
                        <h2>Hey, I'm Bill!</h2>
                    </div>
                    {/* <div className="row">
                        <Image height="500px" path="donuts.jpg" />
                    </div> */}
                    <div className="row">
                        <p>
                            I'm a curious, motivated, and hard-working individual with an interest for software development, AI, and data. 
                            I enjoy working on projects that have real-world impact in industries that I am passionate about.&nbsp;<span>🇨🇦</span></p>
                    </div>
                    {/* <div className="row">
                        <iframe width="420" height="315" src="https://www.youtube.com/embed/Zw6UpeFCeN0"></iframe>
                    </div> */}
                    <div className="row">
                        <h2>Education</h2>
                    </div>
                    <div className="row">
                        <p>I'm a 19 year old Management Engineering Major at the University of Waterloo. 
                            Management Engineering is a one-of-a-kind interdisciplinary program with a split focus in computer science, systems engineering, and optimization.</p>
                    </div>
                    <div className="row">
                        <Image height="40px" path="about/waterloo-engineering.png" />
                    </div>
                    <div className="row">
                        <h2>Experience</h2>
                    </div>
                    <div className="row">
                        <p>Waterloo Engineering students are given six co-op terms on top of coursework. 
                            These work terms allow students to gain real-world experience while exploring potential career paths. 
                            For my first work term this past summer, I was an intern at Canadian Tire Corporation.</p>                       
                    </div>
                    <div className="row">
                        <Image height="80px" path="about/canadian-tire-large.png" />
                    </div>
                    <div className="row">
                        <Link link="/projects">Learn More</Link>
                    </div>
                    <div className="row">
                        <p>In the future, I would like to experience positions related to <br/> <span >Software Engineering, Data Science, and Product Management.</span> </p>                       
                    </div>
                    <h2>Skills</h2>
                    <div className="row">
                        <span className="col-md-2" >
                            <Image marginBottom="40px" height="100px" path="skills/html5.png" />
                        </span>
                        <span className="col-md-2" >
                            <Image height="100px" path="skills/css.png" />
                        </span>
                        <span className="col-md-2" >
                            <Image height="100px" path="skills/javascript.png" />
                        </span>
                        <span className="col-md-2" >
                            <Image height="100px" path="skills/nodejs.png" />
                        </span>
                        <span className="col-md-2" >
                            <Image height="100px" path="skills/java.png" />
                        </span>
                        <span className="col-md-2" >
                            <Image height="100px" path="skills/python.png" />
                        </span>
                        <span className="col-md-2" >
                            <Image height="100px" path="skills/react.png" />
                        </span>
                        <span className="col-md-2" >
                            <Image height="100px" path="skills/angular.png" />
                        </span>
                    </div>
                    <h2>Hobbies</h2>
                    <div className="row">
                        <span className="col-md-4">
                            <p>Sports + Fitness</p>
                        </span>
                        <span className="col-md-4">
                            <p>Guitar</p>
                        </span>
                        <span className="col-md-4">
                            <p>Cooking</p>
                        </span>
                    </div>
                    <h2>Teams I Support</h2>
                    <div className="row">
                        <span className="col-md-4">
                            <Image height="100px" path="about/georgia.png" />
                        </span>
                        <span className="col-md-4">
                            <Image height="100px" path="about/tml.png" />
                        </span>                        
                        <span className="col-md-4">
                            <Image height="100px" path="about/atlanta-falcons.png" />
                        </span>
                    </div>
                </div>
            </div>
        )
    }
};


export default CSSModules(About, styles);