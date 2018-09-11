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
        const highlight = {
            'backgroundColor': 'yellow'
        }

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
                        <Image height="500px" path="donuts.jpg" />
                    </div>
                    <div className="row">
                        <p>
                            I'm a curious, motivated, hard-working individual with an interest for software development, AI, and data. 
                            I enjoy working on projects that have real-world impact in industries that I am passionate about.&nbsp;<span>🇨🇦</span></p>
                    </div>
                    {/* <div className="row">
                        <iframe width="420" height="315" src="https://www.youtube.com/embed/Zw6UpeFCeN0"></iframe>
                    </div> */}
                    <h2>@school</h2>
                    <div className="row">
                        <p>I'm a 19 year old Management Engineering Major at the University of Waterloo. 
                            Management Engineering is a one-of-a-kind interdisciplinary program with a split focus in computer science, systems engineering, and optimization.</p>
                    </div>
                    <div className="row">
                        <Image height="40px" path="waterloo-engineering.png" />
                    </div>
                    <h2>@work</h2>
                    <div className="row">
                        <p>Waterloo Engineering students are given six co-op terms on top of coursework. 
                            These mandatory work terms allow students to gain real-world experience while exploring potential career paths. 
                            For my first work term this past summer, I was an intern at Canadian Tire Corporation.</p>                       
                    </div>
                    <div className="row">
                        <Image height="80px" path="canadian-tire-large.png" />
                    </div>
                    <div className="row">
                        <Link link="/projects">Learn More</Link>
                    </div>
                    <div className="row">
                        <p>In future terms, I would like to acquire positions related to <br/> <span style={highlight} >Software Engineering, Data Science, and Product Management.</span> </p>                       
                    </div>
                    <h2>@skills</h2>

                    <h2>@hobbies</h2>
                    <div className="row">
                        <p>Sports + Fitness</p>
                        <p>Guitar</p>
                        <p>Cooking</p>
                    </div>
                    <div className="row">
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