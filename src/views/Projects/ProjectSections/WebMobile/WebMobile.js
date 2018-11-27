import React, { Component } from 'react';
import styles from './WebMobile.css';
import CSSModules from 'react-css-modules';
import ProjectTile from '../../ProjectTile/ProjectTile';
import projectInfo from '../../../../assets/projectsInfo';
import ProjectsInfo from '../../../../assets/projectsInfo';


class WebMobile extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return(
        <div className="container">
            <span styleName="curve" className="container">
                <div className="row">
                    <h1>
                        {ProjectsInfo.headings.webMobile.title}
                    </h1>
                </div>
                    <p>
                        {ProjectsInfo.headings.webMobile.description}
                    </p>
            </span>
            <div className="row">
                <ProjectTile to="/projects/web-mobile/blitz" reverse="true" imageHeight="400px" imageName="projects/blitz.png" tag={projectInfo.blitz.tag} title={projectInfo.blitz.name} shortDesc={projectInfo.blitz.description}/>
            </div>
            <div className="row">
                <ProjectTile to="/projects/web-mobile/munkee" imageHeight="400px" imageName="projects/munkee.png" tag={projectInfo.munkee.tag} title={projectInfo.munkee.name} shortDesc={projectInfo.munkee.description}/>
            </div>
            <div className="row">
                <ProjectTile to="/projects/web-mobile/vcuts" singleTile = "true" imageHeight="400px" tag={projectInfo.vcuts.tag}title={projectInfo.vcuts.name} shortDesc={projectInfo.vcuts.description}/>
            </div>
        </div>
        )
    }
};



export default CSSModules(WebMobile, styles);