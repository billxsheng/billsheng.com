import React, { Component } from 'react';
import styles from '../ProjectDetails.css';
import CSSModules from 'react-css-modules';
import projects from '../../../../assets/projects';
import links from '../../../../assets/links';
import Image from '../../../../components/Image/Image';
import Button from '../../../../components/Button/Button';
import {NavLink} from 'react-router-dom'; 
import Icon from '../../../../components/Icon/Icon';
import Fade from 'react-reveal/Fade';


var projectsArray = projects.headings.projectOrder;

class Blitz extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((projects.blitz.reference)) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((projects.blitz.reference)) === projectsArray.length - 1) {
            this.setState({rightArrow: false});
        }
    }

    render() {
        return (
            <div>
                <span styleName="curve" className="container">
                    <div className="row container" style={{margin: '0 auto'}}>
                        <div className="col-md-2">
                            {this.state.leftArrow ? 
                                <NavLink styleName="btn-prev" to={`/projects/${projectsArray[projectsArray.indexOf(projects.blitz.reference) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink>: 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <div className="col-md-8">
                            <h1>
                                {projects.blitz.name}
                            </h1>
                        </div>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/${projectsArray[projectsArray.indexOf(projects.blitz.reference) + 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </a>
                            }
                        </div> 
                    </div>
                    <Fade bottom>
                    <p>
                        {projects.blitz.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p className="text-center" styleName="title-p" >{projects.blitz.tag}</p>
                    </div>
                    </Fade>
                </span>
                <div styleName="modal" >
                <Fade bottom>
                    <hr/>
                    <Image width="500px" withRadius path = "projects/blitz/blitz-with-background.png" />
                    <hr/>
                    </Fade>
                    <Fade bottom>
                    <h4>Summary</h4>
                    <p>{projects.blitz.content.summary}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Technology</h4>
                    <p>{projects.blitz.content.technology}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>What I did</h4>
                    <ul className="list-group">
                    <li><p3>Wrote HTML form logic to call REST API endpoints</p3></li>
                    <li><p3>Created User, Team, and Game entities to be saved in MongoDB database</p3></li>
                    <li><p3>Configured Mongoose to simplify interactions with MongoDB database</p3></li>
                    <li><p3>Used Node JS for JavaScript run-time environment</p3></li>
                    <li><p3>Wrote REST API using Express JS and specified logic within application endpoints</p3></li>
                    <li><p3>Utilized Passport JS to implement authentication using JSON Web Tokens and OAuth 2.0</p3></li>
                    <li><p3>Called Twilio SMS microservices to send text messages to users</p3></li>
                    <li><p3>Called external MySportsFeeds API to continuously update game states </p3></li>
                    <li><p3>Used handlebars templates to create 5+ views using HTML & CSS</p3></li>
                    </ul>
                    </Fade>
                    <Fade bottom>
                    <h4>Problem</h4>
                    <p>{projects.blitz.content.problem}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Solution</h4>
                    <p>{projects.blitz.content.solution}</p>
                    </Fade>
                    <Fade bottom>
                    <Image width="500px" fine="Blitz Login" path = "projects/blitz/blitz-login.png" />
                    </Fade>
                    <Fade bottom>
                    <Image width="500px" fine="Blitz Sign Up" path = "projects/blitz/blitz-signup.png" />
                    </Fade>
                    <Fade bottom>
                    <Image width="500px" fine="Blitz Profile" path = "projects/blitz/blitz-profile.png" />
                    </Fade>
                    <Fade top>
                    <hr/>
                    <div className="row">
                    <Button margin="0px auto" link={links.github + "/blitz"} btnType = "btnLarge">Github</Button>
                    </div>
                    </Fade>

                </div>
            </div>
        )
    }
};



export default CSSModules(Blitz, styles);