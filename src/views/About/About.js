import React, { Component } from 'react';
import styles from './About.css';
import CSSModules from 'react-css-modules';
import Image from '../../components/Image/Image';
import Link from '../../components/Button/Link/Link';
import Button from '../../components/Button/Button';
import CarouselItem from '../../components/Carousel/SlideCarousel/CarouselItem/CarouselItem';
import SlideCarousel from '../../components/Carousel/SlideCarousel/SlideCarousel';
import aboutInfo from '../../assets/aboutInfo';



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
                                {aboutInfo.general}
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
                            <p2>
                                {aboutInfo.education}
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
                            <p2>
                                {aboutInfo.experience}
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