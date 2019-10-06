import React, { Component } from 'react';
import styles from '../ProjectDetails.css';
import CSSModules from 'react-css-modules';
import ProjectsInfo from '../../../../assets/projectsInfo';
import Image from '../../../../components/Image/Image';
import Button from '../../../../components/Button/Button';
import {NavLink} from 'react-router-dom'; 
import Icon from '../../../../components/Icon/Icon';
import Fade from 'react-reveal/Fade';

var projectsArray = ProjectsInfo.headings.projectOrder;

class Huddle extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((ProjectsInfo.huddle.reference)) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((ProjectsInfo.huddle.reference)) === projectsArray.length - 1) {
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
                                <NavLink styleName="btn-prev" to={`/projects/experience/${projectsArray[projectsArray.indexOf(ProjectsInfo.huddle.reference) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <div className="col-md-8">
                            <h1>
                                {ProjectsInfo.huddle.name}
                            </h1>
                        </div>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/web-mobile/${projectsArray[projectsArray.indexOf(ProjectsInfo.huddle.reference) + 1]}`} >
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
                        {ProjectsInfo.huddle.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p className="text-center" styleName="title-p" >{ProjectsInfo.huddle.tag}</p>
                    </div>
                    </Fade>
                </span>
                <div styleName="modal">
                    <Fade bottom>
                    <hr/>
                    <Image width="500px" withRadius path = "projects/huddle/huddle-with-background.png" />
                    <hr/>
                    </Fade>
                    <Fade bottom>
                    <h4>Summary</h4>
                    <p>{ProjectsInfo.huddle.content.summary}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Technology</h4>
                    <p>{ProjectsInfo.huddle.content.technology}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>My Tasks</h4>
                    <ul className="list-group">
                    <li><p3>Created authentication templates using React-Native</p3></li>
                    <li><p3>Called HTTP requests using React Axios library</p3></li>
                    <li><p3>Configured login/signup form logic using data binding, lifecycle hooks, and component states</p3></li>
                    <li><p3>Implemented MVC design patterns using Java Spring framework</p3></li>
                    <li><p3>Implemented session-based stateful authentication using Spring Security </p3></li>
                    <li><p3>Wrote User and Game entities to be saved into MySQL database</p3></li>
                    <li><p3>Constructed REST API endpoints within Spring Controllers to configure data flow between client, server, and database</p3></li>
                    <li><p3>Called external MySportsFeeds API to continuously update game states in database</p3></li>
                    </ul>
                    </Fade>
                    <Fade bottom>
                    <h4>The Problem</h4>
                    <p>{ProjectsInfo.huddle.content.problem}</p> 
                    </Fade>
                    <Fade bottom>
                    <h4>Our Solution</h4>
                    <p>{ProjectsInfo.huddle.content.solution}</p>
                    </Fade>
                    <Fade bottom>
                    <Image width="300px" fine="Huddle Welcome Screen" path = "projects/huddle/huddle-splash.jpg" />
                    </Fade>
                    <Fade bottom>
                    <div className="row">
                        <div className="col-md-6">
                        <Image width="300px" fine="Huddle Promoted Venues" path = "projects/huddle/huddle-venues.jpg" />      
                        </div>
                        <div className="col-md-6">
                        <Image width="300px" fine="Huddle Games" path = "projects/huddle/huddle-games.jpg" />      
                        </div>
                    </div>   
                    </Fade>
                    <Fade top>
                    <hr/>
                    <div className="row"> 
                    <Button margin="0px auto" link={"https://github.com/billxsheng/Huddle"} btnType = "btnLarge">Github</Button>     
                    </div>
                    </Fade>
                </div>
            </div>
        )
    }
};



export default CSSModules(Huddle, styles);