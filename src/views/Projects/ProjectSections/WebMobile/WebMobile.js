import React, { Component } from 'react';
import styles from './WebMobile.css';
import CSSModules from 'react-css-modules';
import ProjectTile from '../../ProjectTile/ProjectTile';
import projectInfo from '../../../../assets/projectsInfo';


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
                        Web & Mobile
                    </h1>
                </div>
                    <p>
                        Web/Mobile Development
                    </p>
            </span>
            <div className="row">
                <ProjectTile to="/projects/web-mobile/personal-website" imageHeight="400px" imageName="projects/pweb.png" tag="Side Project" title={projectInfo.personalWebsite.name} shortDesc={projectInfo.personalWebsite.description} />
            </div>
            <div className="row">
                <ProjectTile to="/projects/web-mobile/blitz" reverse="true" imageHeight="400px" imageName="projects/blitz.png" tag="Side Project" title={projectInfo.Blitz.name} shortDesc={projectInfo.Blitz.description}/>
            </div>
            <div className="row">
                <ProjectTile to="/projects/web-mobile/munkee" imageHeight="400px" imageName="projects/munkee.png" tag="Side Project" title={projectInfo.Munkee.name} shortDesc={projectInfo.Munkee.description}/>
            </div>
            <div className="row">
                <ProjectTile to="/projects/web-mobile/vcuts" singleTile = "true" imageHeight="400px" tag="Freelance" title={projectInfo.vCuts.name} shortDesc={projectInfo.vCuts.description}/>
            </div>
            <div className="row">
                <ProjectTile to="/projects/web-mobile/prog" reverse="true" imageHeight="400px" imageName="projects/prog.png" tag="Side Project" title={projectInfo.PROG.name} shortDesc={projectInfo.PROG.description}/>
            </div>
        </div>
        )
    }
};



export default CSSModules(WebMobile, styles);