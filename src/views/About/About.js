import React, { Component } from 'react';
import styles from './About.css';
import CSSModules from 'react-css-modules';
import Image from '../../components/Image/Image';
import Link from '../../components/Button/Link/Link';
import SlideCarousel from '../../components/Carousel/SlideCarousel/SlideCarousel';
import CarouselItem from '../../components/Carousel/SlideCarousel/CarouselItem/CarouselItem';


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

                <div styleName="content-div">
                    <div styleName="section-div-first" >
                        <div className="row">
                            <h2>Hey, I'm Bill!</h2>
                        </div>
                        <div className="row">
                            <p>
                            I'm a curious, motivated, and hard-working individual with an interest for software development, AI, and data. 
                            I enjoy working on projects that have real-world impact in industries that I am passionate about.&nbsp;<span aria-label="emoji" role="img" >🇨🇦</span></p>
                        </div>
                    </div>

                    <div styleName="section-div">
                        <div className="row">
                            <h2>Education</h2>
                        </div>
                        <div className="row">
                            <p>I'm a 19 year old Management Engineering Major at the University of Waterloo. 
                                Management Engineering is a one-of-a-kind interdisciplinary program with a split focus in computer science, systems engineering, and optimization.</p>
                        </div>
                        <div className="row">
                            <Image height="40px" path="about/other/waterloo-engineering.png" />
                        </div>
                    </div>
                    
                    <div styleName="section-div"> 
                        <div className="row">
                            <h2>Experience</h2>
                        </div>
                        <div className="row">
                            <p>Waterloo Engineering students are given six co-op terms on top of coursework. 
                                These work terms allow students to gain real-world experience while exploring potential career paths. 
                                For my first work term this past summer, I was an intern at Canadian Tire Corporation.</p>                       
                        </div>
                        <div className="row">
                            <Image height="80px" path="about/other/canadian-tire-large.png" />
                        </div>
                        <div className="row">
                            <Link margin="20px" link="/projects">Learn More</Link>
                        </div>
                        <div className="row">
                            <p>In the future, I would like to work in positions related to <br/> <span >Software Engineering, Data Science, and Product Management.</span> </p>                       
                        </div>
                    </div>
                   

                   <div styleName="section-div">
                    <div className="row">
                        <h2>Skills</h2>
                    </div>
                    <div className="row">
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/html5.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/css.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/java.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/python.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/javascript.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/nodejs.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/express.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/react.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/angular.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/aws.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/github.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/graphql.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/powershell.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/excel.png" />
                        </span>
                        <span styleName="skill-img" className="col-md-3" >
                            <Image marginTop="40px" height="100px" path="skills/sql.png" />
                        </span>
                    </div>
                   </div>
                    
                   
                    <div styleName="section-div">
                        <div className="row">
                            <h2>Hobbies</h2>
                        </div>
                        <div styleName="carousel-row" className="row">
                            <SlideCarousel>
                                <CarouselItem to="/" path = "about/hobbies/barbecue.jpg" title="Sports & Fitness"  />
                                <CarouselItem to="/"  path = "about/hobbies/guitar.jpg"  title="Guitar" />
                                <CarouselItem to="/"  path = "about/hobbies/barbecue.jpg"  title="Barbecue"  />
                            </SlideCarousel>
                        </div>
                    </div>


                    <div styleName="section-div">
                        <div className="row">
                            <h2>Teams I Support</h2>
                        </div>
                        <div styleName="img-row" className="row">
                            <span styleName="team" className="col-md-6">
                                <Image height="100px" path="about/teams/georgia.png" />
                            </span>
                            <span styleName="team" className="col-md-6">
                                <Image height="100px" path="about/teams/tml.png" />
                            </span>                        
                        </div>
                    </div>
                   
                   
                    
                </div>
            </div>
        )
    }
};


export default CSSModules(About, styles);