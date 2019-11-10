import React, { Component } from 'react';
import styles from './MyStory.css';
import CSSModules from 'react-css-modules';
import Image from '../../components/Image/Image';
import Button from '../../components/Button/Button';
import about from '../../assets/about';
import Fade from 'react-reveal/Fade';
import Aux from '../../hoc/HO-Aux/HO-aux';

class MyStory extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <Aux>
                <div styleName="wrapper">
                    <div className="container">
                        <span className="container">
                            <div className="row">
                                <h1>
                                    My Story
                                </h1>
                            </div>
                        </span>
                    </div>

                    <div styleName="content-div">
                        <Fade bottom>
                        <div>
                            <Image margin="0" height="400px" withRadius path="about/other/secondary.jpg" />
                            <p2>
                                {about.general.description}
                            </p2>
                            <div className="row" >
                                <Button margin="20px auto 0 auto" to="/projects/experience">View My Previous Experiences</Button>
                            </div>
                            <div className="row" >
                                <Button margin="20px auto 0 auto" resume btnType="btnLarge" >View My Resume</Button>
                            </div>
                        </div>
                        </Fade>
                        <Fade bottom>
                        <div styleName="section-div"> 
                            <h2>{about.education.title}</h2>
                            <p2>
                                {about.education.description}
                            </p2>    
                            <Image width="600px" path="about/other/waterloo-engineering.png" />
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div styleName="section-div">
                            <h2>{about.skills.title}</h2>
                            <div style={{'margin': '0 auto'}}>
                                <p2><strong>Languages</strong></p2>
                                <ul styleName="skills-list" className="list-group">
                                <li>JavaScript, Java, Swift, Ruby, Python, HTML/CSS, Typescript, VBA, SQL, PHP</li>
                                </ul> 
                                <p2><strong>Frameworks & Libraries</strong></p2>
                                <ul styleName="skills-list" className="list-group">
                                <li>Node JS (Express JS & Socket.IO), Spring, Ruby on Rails, React JS, React Native, Angular 2+</li>
                                </ul>
                                <p2><strong>Data Engineering</strong></p2>
                                <ul styleName="skills-list" className="list-group">
                                <li>Hadoop, Apache Kafka, Apache Spark</li>
                                </ul>
                                <p2><strong>Cloud & Tools</strong></p2>
                                <ul styleName="skills-list" className="list-group">
                                <li>MongoDB, MySQL, PostgreSQL, Xcode, Git, Docker, JIRA, VMWare, AWS, Postman</li>
                                </ul>
                                <p2><strong>General</strong></p2>
                                <ul styleName="skills-list" className="list-group">
                                <li>Object-Oriented Design, Data Structures & Algorithms, Databases, Data Analysis, Restful, MVC, API Development</li>
                                </ul>
                            </div>                       
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div styleName="section-div">
                            <h2>{about.hobbies.title}</h2>
                            <p2>
                                {about.hobbies.description}
                            </p2>    
                            <ul styleName="list" className="list-group">
                                <li>Basketball</li>
                                <li>Ice Hockey</li>
                                <li>Ultimate Frisbee</li>
                                <li>College Football, NHL, NBA</li>
                                <li>Guitar</li>
                                <li>Side Projects</li>
                                <li>Reading</li>
                                <li>Finance</li>
                            </ul>                   
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div styleName="section-div">
                            <h2>Teams</h2>
                            <p2>
                                {about.teams.description}
                            </p2>                       
                            <div styleName="img-row" className="row">
                                <span styleName="team" className="col-md-4">
                                    <Image height="80px" path="about/teams/georgia.png" />
                                </span>
                                <span styleName="team" className="col-md-4">
                                    <Image height="80px" path="about/teams/tml.png" />
                                </span>                        
                                <span styleName="team" className="col-md-4">
                                    <Image height="80px" path="about/teams/raptors.png" />
                                </span> 
                            </div>
                        </div> 
                        </Fade>
                    </div>
                </div>
                </Aux>
        )
    }
};


export default CSSModules(MyStory, styles, {allowMultiple: true});