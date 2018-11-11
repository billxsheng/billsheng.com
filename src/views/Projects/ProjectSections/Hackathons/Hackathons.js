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
                <div styleName="curve">
                    <span className="container">
                        <h1>
                            Hackathons
                        </h1>
                    </span>
                    <span className="container">
                        <p>
                            Projects built during hackathons.
                        </p>
                    </span>
                </div>
                <div className="row">
                    <ProjectTile to="/projects/hackathons/ryse" imageHeight="400px" imageName="projects/ryse.png" tag="Hackathon" title={projectInfo.Ryse.name} shortDesc={projectInfo.Ryse.description} />
                </div>
                <div className="row">
                    <ProjectTile to="/projects/hackathons/moodify" reverse="true" imageHeight="400px" imageName="projects/moodify.png" tag="Hackathon" title={projectInfo.Moodify.name} shortDesc={projectInfo.Moodify.description}/>
                </div>
            </div>
        )
    }
};



export default CSSModules(Hackathons, styles);