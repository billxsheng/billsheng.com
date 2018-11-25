import React, { Component } from 'react';
import styles from './About.css';
import CSSModules from 'react-css-modules';
import Image from '../../components/Image/Image';
import Link from '../../components/Button/Link/Link';
import Button from '../../components/Button/Button';
import CarouselItem from '../../components/Carousel/SlideCarousel/CarouselItem/CarouselItem';
import SlideCarousel from '../../components/Carousel/SlideCarousel/SlideCarousel';



class About extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div>
                <div styleName="about" className="container">
                    <span className="container">
                        <div className="row">
                            <h1>
                                About
                            </h1>
                        </div>
                    </span>
                </div>

                <div styleName="content-div">
                    <div styleName="section-div-first" >
                        <div className="row">
                            <Image  height="500px" path="about/team-picture.jpeg" />
                        </div>
                        <div className="row">
                            <p2>
                            Hey, I'm Bill! I'm a curious, motivated, and hard-working individual with an interest for software development, AI, and data. 
                            I enjoy working on projects that have real-world impact in industries that I am passionate about.&nbsp;<span aria-label="emoji" role="img" >🇨🇦</span>
                            I am currently seeking a challenging new internship opportunity for the fall 2019 term in positions related to Software Engineering, Data Science, and Product Management. Scroll down to learn about what I have to offer :)
                            </p2>
                        </div>
                        <div className="row" >
                        </div>
                        <div className="row">
                            <Button resume="true" btnType="btnLarge" >View My Resume</Button>
                        </div>
                    </div>

                    <div styleName="section-div">
                        <div className="row">
                            <h2>Education</h2>
                        </div>
                        <div className="row">
                            <p2>I'm a 19 year old Management Engineering Major at the University of Waterloo. 
                                Management Engineering is a one-of-a-kind interdisciplinary program with a split focus in computer science, systems engineering, and optimization.
                            </p2>
                        </div>
                        <div className="row">
                            <Image  height="25px" path="about/other/waterloo-engineering.png" />
                        </div>
                    </div>
                    
                    <div styleName="section-div"> 
                        <div className="row">
                            <h2>Experience</h2>
                        </div>
                        <div className="row">
                            <p2>Waterloo Engineering students are given six co-op terms on top of coursework. 
                                These work terms allow students like me to gain real-world experience while exploring potential career paths. During academic terms, I can be found working with engineering design teams.
                            </p2>                       
                        </div>
                        <div className="row">
                            <Link margin="0px" link="/projects/experience">View My Previous Experiences</Link>
                        </div>
                    </div>
                                   
                    <div styleName="section-div">
                        <div className="row">
                            <h2>Hobbies</h2>
                        </div>
                        <div styleName="carousel">
                            <SlideCarousel>
                                <CarouselItem showcase="true" type = "sports" title="Sports & Fitness"  />
                                <CarouselItem showcase="true" type = "guitar"  title= "Guitar"  />
                                <CarouselItem showcase="true"  type = "bbq"  title="Barbecue"  />
                            </SlideCarousel>
                        </div>
                    </div>


                    <div styleName="section-div">
                        <div className="row">
                            <h2>Teams</h2>
                        </div>
                        <div styleName="img-row" className="row">
                            <span styleName="team" className="col-md-4">
                                <Image height="100px" path="about/teams/georgia.png" />
                            </span>
                            <span styleName="team" className="col-md-4">
                                <Image height="100px" path="about/teams/tml.png" />
                            </span>                        
                            <span styleName="team" className="col-md-4">
                                <Image height="100px" path="about/teams/raptors.png" />
                            </span> 
                        </div>
                    </div> 
                </div>
            </div>

        )
    }
};


export default CSSModules(About, styles);