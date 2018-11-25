import React, { Component } from 'react';
import styles from './Hackathons.css';
import CSSModules from 'react-css-modules';
import ProjectTile from '../../ProjectTile/ProjectTile';
import projectInfo from '../../../../assets/projectsInfo';


class Hackathons extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    

    render() {
        return(
            <div className="container">
                <span styleName="curve" className="container">
                    <div className="row">
                        <h1>
                            {projectInfo.headings.hackathons.title}
                        </h1>
                    </div>
                        <p>
                            {projectInfo.headings.hackathons.description}
                        </p>
                </span>
                <div className="row">
                    <ProjectTile to="/projects/hackathons/ryse" imageHeight="400px" imageName="projects/ryse.png" tag={projectInfo.ryse.tag} title={projectInfo.ryse.name} shortDesc={projectInfo.ryse.description} />
                </div>
                <div className="row">
                    <ProjectTile to="/projects/hackathons/moodify" reverse="true" imageHeight="400px" imageName="projects/moodify.png" tag={projectInfo.moodify.tag} title={projectInfo.moodify.name} shortDesc={projectInfo.moodify.description}/>
                </div>
            </div>
        )
    }
};



export default CSSModules(Hackathons, styles);