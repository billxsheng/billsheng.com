import React, { Component } from 'react';
import styles from '../ProjectDetails.css';
import CSSModules from 'react-css-modules';
import ProjectsInfo from '../../../../assets/projectsInfo';
import Links from '../../../../assets/links';
import Image from '../../../../components/Image/Image';
import Button from '../../../../components/Button/Button';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

var projectsArray = ProjectsInfo.headings.projectOrder;

class Moodify extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((ProjectsInfo.moodify.name).toLowerCase()) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((ProjectsInfo.moodify.name).toLowerCase()) === projectsArray.length - 1) {
            this.setState({rightArrow: false});
        }
    }

    
    render () {
        return (
            <div>
                <span styleName="curve" className="container">
                    <div className="row container" style={{margin: '0 auto'}}>
                        <div className="col-md-2">
                            {this.state.leftArrow ? 
                                <NavLink styleName="btn-prev" to={`/projects/hackathons/${projectsArray[projectsArray.indexOf(ProjectsInfo.moodify.name.toLowerCase()) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink>: 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <div className="col-md-8">
                            <h1>
                                {ProjectsInfo.moodify.name}
                            </h1>
                        </div>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/hackathons/${projectsArray[projectsArray.indexOf(ProjectsInfo.moodify.name.toLowerCase()) + 1]}`} >
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
                        {ProjectsInfo.moodify.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p className="text-center" styleName="title-p" >{ProjectsInfo.moodify.tag}</p>
                    </div>
                    </Fade>
                </span>
                <div styleName="modal" >
                    <Fade bottom>
                    <hr/>
                    <Image width="500px" path = "projects/moodify/moodify.png" />
                    <hr/>
                    </Fade>
                    <Fade bottom>
                    <h4>Summary</h4>
                    <p>{ProjectsInfo.moodify.content.summary}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Technology</h4>
                    <p>{ProjectsInfo.moodify.content.technology}</p>
                    </Fade>
                    <Fade top>
                    <hr/>
                    <div className="row">
                    <Button margin="0px auto" link={Links.github + "/moodify"} btnType = "btnLarge">Github</Button>
                    </div>
                    </Fade>
                </div>
            </div>
        )
    }
};



export default CSSModules(Moodify, styles);