import React, { Component } from 'react';
import styles from '../ProjectSections.css';
import CSSModules from 'react-css-modules';
import ProjectTile from '../../ProjectTile/ProjectTile';
import projectsInfo from '../../../../assets/projectsInfo';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom';

var projectsArray = projectsInfo.headings.order;

class WebMobile extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((projectsInfo.headings.webMobile.link).toLowerCase()) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((projectsInfo.headings.webMobile.link).toLowerCase()) === projectsArray.length - 1) {
            this.setState({rightArrow: false});
        }
    }
    
    
    render() {
        return(
        <div className="container">
            <span styleName="curve" className="container">
                <div className="row" styleName="title-block">
                    <div className="col-md-2">
                            {this.state.leftArrow ? 
                                <NavLink styleName="btn-prev" to={`/projects/${projectsArray[projectsArray.indexOf(projectsInfo.headings.webMobile.link.toLowerCase()) - 1]}`} >
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
                                <NavLink styleName="btn-next" to={`/projects/${projectsArray[projectsArray.indexOf(projectsInfo.headings.webMobile.link.toLowerCase()) + 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </a>
                            }
                        </div>
                </div>
                    <p>
                        {projectsInfo.headings.webMobile.description}
                    </p>
            </span>
            <div className="row">
                <ProjectTile to="/projects/web-mobile/blitz" reverse="true" imageHeight="400px" imageName="projects/blitz.png" tag={projectsInfo.blitz.tag} title={projectsInfo.blitz.name} shortDesc={projectsInfo.blitz.description}/>
            </div>
            <div className="row">
                <ProjectTile to="/projects/web-mobile/munkee" imageHeight="400px" imageName="projects/munkee.png" tag={projectsInfo.munkee.tag} title={projectsInfo.munkee.name} shortDesc={projectsInfo.munkee.description}/>
            </div>
            <div className="row">
                <ProjectTile to="/projects/web-mobile/vcuts" singleTile = "true" imageHeight="400px" tag={projectsInfo.vcuts.tag}title={projectsInfo.vcuts.name} shortDesc={projectsInfo.vcuts.description}/>
            </div>
        </div>
        )
    }
};



export default CSSModules(WebMobile, styles);