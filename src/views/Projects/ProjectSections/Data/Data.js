import React, { Component } from 'react';
import projectsInfo from '../../../../assets/projects';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom';
import styles from '../ProjectSections.css';
import CSSModules from 'react-css-modules';
import Fade from 'react-reveal/Fade';
import ProjectTile from '../../ProjectTile/ProjectTile';

var projectsArray = projectsInfo.headings.order;

class Data extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((projectsInfo.headings.ds.link)) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((projectsInfo.headings.ds.link)) === projectsArray.length - 1) {
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
                                <NavLink styleName="btn-prev" to={`/projects/${projectsArray[projectsArray.indexOf(projectsInfo.headings.ds.link) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink>: 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <div className="col-md-8" styleName="heading-div">
                            <h1>
                                {projectsInfo.headings.ds.title}
                            </h1>
                        </div>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/${projectsArray[projectsArray.indexOf(projectsInfo.headings.ds.link) + 1]}`} >
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
                        {projectsInfo.headings.ds.description}
                    </p>
                    </Fade>
                </span>
                <div styleName="content-row">
                </div>
                <Fade bottom>
                <div className="row">
                    <ProjectTile singleTile to="/projects/data/oubre-sentiment-analysis" tag={projectsInfo.oubre.tag} title={projectsInfo.oubre.name} shortDesc={projectsInfo.oubre.description} />
                </div>
                </Fade>
            </div>
        )
    }
};



export default CSSModules(Data, styles);