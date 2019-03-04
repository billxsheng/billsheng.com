import React, { Component } from 'react';
import styles from './MyStory.css';
import CSSModules from 'react-css-modules';
import Image from '../../components/Image/Image';
import Link from '../../components/Button/Link/Link';
import Button from '../../components/Button/Button';
import CarouselItem from '../../components/Carousel/SlideCarousel/CarouselItem/CarouselItem';
import SlideCarousel from '../../components/Carousel/SlideCarousel/SlideCarousel';
import aboutInfo from '../../assets/aboutInfo';



class MyStory extends Component {

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
                                My Story
                            </h1>
                        </div>
                    </span>
                </div>

                <div styleName="content-div">
                    <div styleName="section-div-first" >
                        <div className="row">
                            <img className="img-fluid" styleName= "header-img" alt="header-img" src={require(`./../../assets/images/about/other/headshot.jpg`)} ></img>
                        </div>
                        <div className="row">
                            <p2>
                                {aboutInfo.general.description}
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
                            <h2>{aboutInfo.education.title}</h2>
                        </div>
                        <div className="row">
                            <p2>
                                {aboutInfo.education.description}
                            </p2>
                        </div>
                        <div className="row">
                            <Image height="25px" path="about/other/waterloo-engineering.png" />
                        </div>
                    </div>
                    
                    <div styleName="section-div"> 
                        <div className="row">
                            <h2>{aboutInfo.experience.title}</h2>
                        </div>
                        <div className="row">
                            <p2>
                                {aboutInfo.experience.description}
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
                        <div className="row">
                            <p2>
                                {aboutInfo.hobbies.description}
                            </p2>                       
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
                        <div className="row">
                            <p2>
                                {aboutInfo.teams.description}
                            </p2>                       
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


export default CSSModules(MyStory, styles);