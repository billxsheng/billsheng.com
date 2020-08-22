import React, { Component } from 'react';
import styles from '../ProjectSections.css';
import CSSModules from 'react-css-modules';
import ProjectTile from '../../ProjectTile/ProjectTile';
import projectsInfo from '../../../../assets/projects';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom';

var projectsArray = projectsInfo.headings.order;

class Experience extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((projectsInfo.headings.experience.link)) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((projectsInfo.headings.experience.link)) === projectsArray.length - 1) {
            this.setState({rightArrow: false});
        }
    }
    
    render() {
        return ( 
            <div className="container">
                <span styleName="curve" className="container">
                    <div className="row">
                        <div className="col-md-2">
                            {this.state.leftArrow ? 
                                <NavLink styleName="btn-prev" to={`/projects/${projectsArray[projectsArray.indexOf(projectsInfo.headings.experience.link) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink>: 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <div className="col-md-8" styleName="heading-div">
                            <h1>
                                {projectsInfo.headings.experience.title}
                            </h1>
                        </div>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/${projectsArray[projectsArray.indexOf(projectsInfo.headings.experience.link) + 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </a>
                            }
                        </div>
                    </div>
                    <p>
                        {projectsInfo.headings.experience.description}
                    </p>
                </span>
                <div styleName="content-row">
                <div className="row">
                    <ProjectTile to="/projects/experience/nvidia" imageName = "projects/nvidia/NVIDIA.png" imageHeight="400px"  tag={projectsInfo.nvidia.tag} title={projectsInfo.nvidia.name} shortDesc={projectsInfo.nvidia.description} />
                </div>
                <div className="row">
                    <ProjectTile reverse to="/projects/experience/lcbo-next" imageName = "projects/lcbonext/lcbonext.png" imageHeight="400px"  tag={projectsInfo.lcbonext.tag} title={projectsInfo.lcbonext.name} shortDesc={projectsInfo.lcbonext.description} />
                </div>
                <div className="row">
                    <ProjectTile to="/projects/experience/uwblueprint" imageName = "projects/uwblueprint/uwblueprint.png" imageHeight="400px" tag={projectsInfo.uwblueprint.tag} title={projectsInfo.uwblueprint.name} shortDesc={projectsInfo.uwblueprint.description} />
                </div>
                <div className="row">
                    <ProjectTile reverse to="/projects/experience/opentext" imageName = "projects/ot/ot.png" imageHeight="400px"  tag={projectsInfo.opentext.tag} title={projectsInfo.opentext.name} shortDesc={projectsInfo.opentext.description} />
                </div>
                <div className="row">
                    <ProjectTile to="/projects/experience/freelance" imageHeight="400px" imageName="projects/freelance/freelance.png" tag={projectsInfo.freelance.tag} title={projectsInfo.freelance.name} shortDesc={projectsInfo.freelance.description} />
                </div>
                <div className="row">
                    <ProjectTile reverse to="/projects/experience/ctc"  top="25px" imageHeight="400px" imageName="projects/ctc/ctc.png" tag={projectsInfo.ctc.tag}title={projectsInfo.ctc.name} shortDesc={projectsInfo.ctc.description}/>
                </div>
                </div>
            </div>
        )
    }
};



export default CSSModules(Experience, styles);