import React, { Component } from 'react';
import styles from './Experience.css';
import CSSModules from 'react-css-modules';
import ProjectTile from '../../ProjectTile/ProjectTile';
import projectInfo from '../../../../assets/projectsInfo';
import ProjectsInfo from '../../../../assets/projectsInfo';


class Experience extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    

    render() {
        return(
            <div className="container">
                <span styleName="curve" className="container">
                    <div className="row">
                        <h1>
                            {ProjectsInfo.headings.experience.title}
                        </h1>
                    </div>
                        <p>
                            {ProjectsInfo.headings.experience.description}
                        </p>
                </span>
                <div className="row">
                    <ProjectTile to="/projects/experience/opentext" singleTile = "true" imageHeight="400px" imageName="projects/pweb.png" tag={projectInfo.opentext.tag} title={projectInfo.opentext.name} shortDesc={projectInfo.opentext.description} />
                </div>
                <div className="row">
                    <ProjectTile to="/projects/experience/canadian-tire" top="25px" imageHeight="400px" imageName="projects/ctc.png" tag={projectInfo.ctc.tag}title={projectInfo.ctc.name} shortDesc={projectInfo.ctc.description}/>
                </div>
            </div>
        )
    }
};



export default CSSModules(Experience, styles);