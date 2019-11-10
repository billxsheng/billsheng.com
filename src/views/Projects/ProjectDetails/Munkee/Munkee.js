import React, { Component } from 'react';
import styles from '../ProjectDetails.css';
import CSSModules from 'react-css-modules';
import projects from '../../../../assets/projects';
import Image from '../../../../components/Image/Image';
import Button from '../../../../components/Button/Button';
import Icon from '../../../../components/Icon/Icon';
import links from '../../../../assets/links';
import {NavLink} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

var projectsArray = projects.headings.projectOrder;

class Munkee extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        window.scrollTo(0,0);
        if(projectsArray.indexOf((projects.munkee.reference)) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((projects.munkee.reference)) === projectsArray.length - 1) {
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
                                <NavLink styleName="btn-prev" to={`/projects/${projectsArray[projectsArray.indexOf(projects.munkee.reference) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <div className="col-md-8">
                            <h1>
                                {projects.munkee.name}
                            </h1>
                        </div>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/${projectsArray[projectsArray.indexOf(projects.munkee.reference) + 1]}`} >
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
                        {projects.munkee.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p className="text-center" styleName="title-p" >{projects.munkee.tag}</p>
                    </div>
                    </Fade>
                </span>
                <div styleName="modal" >
                    <Fade bottom>
                    <hr/>
                    <Image width="500px" path = "projects/munkee/munkee.png" />
                    <hr/>
                    </Fade>
                    <Fade bottom>
                    <h4>Summary</h4>
                    <p>{projects.munkee.content.summary}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Technology</h4>
                    <p>{projects.munkee.content.technology}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>My Tasks</h4>
                    <ul className="list-group">
                    <li><p3>Configured Mongoose to simplify interactions with MongoDB database</p3></li>
                    <li><p3>Set up Node JS for JavaScript run-time environment</p3></li>
                    <li><p3>Wrote REST API using Express JS and specified logic within application endpoints</p3></li>
                    <li><p3>Utilized web sockets using Socket.IO to create real-time game lobby “rooms”</p3></li>
                    <li><p3>Configured MongoDB to store game entities which included number of players and room ID</p3></li>
                    <li><p3>Generated unique hexatridecimal ID using UniqID NPM library</p3></li>
                    <li><p3>Implemented game logic using JavaScript DOM manipulation</p3></li>
                    <li><p3>Used handlebars templates to create 5+ views using HTML & CSS</p3></li>
                    </ul>
                    </Fade>
                    <Fade bottom>
                    <Image width="700px" fine="Game Screen" path = "projects/munkee/munkee-web.png" />
                    </Fade>
                    <Fade bottom>
                    <Image width="300px" fine="Mobile Game Screen" path = "projects/munkee/munkee-mobile.png" />
                    </Fade>
                    <Fade top>
                    <hr/>
                    <div className="row">
                    <Button margin="0px auto" link={links.munkee} btnType = "btnLarge">Play Now</Button>
                    </div>
                    <br/>
                    <div className="row">
                    <Button margin="0px auto" link={links.github + "/munkee"} btnType = "btnLarge">Github</Button>
                    </div>
                    </Fade>
                </div>
            </div>
        )
    }
};



export default CSSModules(Munkee, styles);