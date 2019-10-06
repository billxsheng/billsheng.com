import React, { Component } from 'react';
import styles from '../ProjectSections.css';
import CSSModules from 'react-css-modules';
import ProjectTile from '../../ProjectTile/ProjectTile';
import projectsInfo from '../../../../assets/projectsInfo';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

var projectsArray = projectsInfo.headings.order;

class WebMobile extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((projectsInfo.headings.webMobile.link)) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((projectsInfo.headings.webMobile.link)) === projectsArray.length - 1) {
            this.setState({rightArrow: false});
        }
    }
    
    
    render() {
        return(
        <div className="container">
            <span styleName="curve" className="container">
                <div className="row">
                    <div className="col-md-2">
                            {this.state.leftArrow ? 
                                <NavLink styleName="btn-prev" to={`/projects/${projectsArray[projectsArray.indexOf(projectsInfo.headings.webMobile.link) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink>: 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div>
                        <div className="col-md-8" styleName="heading-div">
                            <h1>
                                {projectsInfo.headings.webMobile.title}
                            </h1>
                        </div>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/${projectsArray[projectsArray.indexOf(projectsInfo.headings.webMobile.link) + 1]}`} >
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
                    {projectsInfo.headings.webMobile.description}
                </p>
                </Fade>
            </span>
            <div styleName="content-row">
            <Fade bottom>   
            <div className="row">
                <ProjectTile to="/projects/web-mobile/huddle" imageName="projects/huddle/huddle.png" imageHeight="400px" tag={projectsInfo.huddle.tag} title={projectsInfo.huddle.name} shortDesc={projectsInfo.huddle.description}/>
            </div>
            </Fade>
            <Fade bottom>   
            <div className="row">
                <ProjectTile to="/projects/web-mobile/blitz" reverse imageHeight="400px" imageName="projects/blitz/blitz.png" tag={projectsInfo.blitz.tag} title={projectsInfo.blitz.name} shortDesc={projectsInfo.blitz.description}/>
            </div>
            </Fade>
            <Fade bottom>   
            <div className="row">
                <ProjectTile to="/projects/web-mobile/munkee" imageHeight="400px" imageName="projects/munkee/munkee.png" tag={projectsInfo.munkee.tag} title={projectsInfo.munkee.name} shortDesc={projectsInfo.munkee.description}/>
            </div>
            </Fade>
            </div>
        </div>
        )
    }
};



export default CSSModules(WebMobile, styles);