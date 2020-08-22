import React, { Component } from 'react';
import styles from '../ProjectDetails.css';
import CSSModules from 'react-css-modules';
import projects from '../../../../assets/projects';
import Image from '../../../../components/Image/Image';
import Button from '../../../../components/Button/Button';
import Fade from 'react-reveal/Fade';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom'; 

var projectsArray = projects.headings.projectOrder;

class NVIDIA extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((projects.nvidia.reference).toLowerCase()) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((projects.nvidia.reference).toLowerCase()) === projectsArray.length - 1) {
            this.setState({rightArrow: false});
        }
    }
    
    render() {
        return(
            <div>
                <span styleName="curve" className="container">
                    <div className="row container" style={{margin: '0 auto'}}>
                        <div className="col-md-2">
                            {this.state.leftArrow ? 
                                <NavLink styleName="btn-prev" to={`/projects/${projectsArray[projectsArray.indexOf(projects.nvidia.reference) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <div className="col-md-8">
                            <h1>
                                {projects.nvidia.name}
                            </h1>
                        </div>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/${projectsArray[projectsArray.indexOf(projects.nvidia.reference) + 1]}`} >
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
                        {projects.nvidia.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p className="text-center" styleName="title-p" >{projects.nvidia.tag}</p>
                    </div>
                    </Fade>
                </span>
                <div styleName="modal" >
                    <Fade bottom>
                    <hr/>
                    <Image width="500px" path = "projects/nvidia/NVIDIA.png" />
                    <hr/>
                    </Fade>
                    <Fade bottom>
                    <h4>Position</h4>
                    <p>{projects.nvidia.content.position}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Team</h4>
                    <p>{projects.nvidia.content.team}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Technology</h4>
                    <p>{projects.nvidia.content.technology}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>What I did</h4>
                    <p>Coming Soon</p>
                    {/* <ul className="list-group">
                    </ul> */}
                    </Fade>
                </div>
            </div>
        )
    }
};



export default CSSModules(NVIDIA, styles);