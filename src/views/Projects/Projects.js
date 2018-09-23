import React, { Component } from 'react';
import styles from './Projects.css';
import CSSModules from 'react-css-modules';
import ProjectTile from './ProjectTile/ProjectTile';
import projectInfo from '../.../../../assets/projectsInfo';

class Projects extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    

    render() {

        return(
            <div styleName="about" className="container">
                <div styleName="curve">
                    <span className="container">
                        <h1>
                            Projects
                        </h1>
                    </span>
                    <span className="container">
                        <p>
                            A collection of my personal projects
                        </p>
                    </span>
                </div>
                <div className="row">
                    <ProjectTile to="/projects/industry4" singleTile = "true" imageHeight="400px" imageName="projects/pweb.png" tag="Design Team" title={projectInfo.Industry4.name} shortDesc={projectInfo.Industry4.description} />
                </div>
                <div className="row">
                    <ProjectTile to="/projects/personal-website" reverse="true" imageHeight="400px" imageName="projects/pweb.png" tag="Project" title={projectInfo.personalWebsite.name} shortDesc={projectInfo.personalWebsite.description} />
                </div>
                <div className="row">
                    <ProjectTile to="/projects/blitz"  imageHeight="400px" imageName="projects/blitz.png" tag="Project" title={projectInfo.Blitz.name} shortDesc={projectInfo.Blitz.description}/>
                </div>
                <div className="row">
                    <ProjectTile to="/projects/canadian-tire" reverse="true" top="25px" imageHeight="400px" imageName="projects/ctc.png" tag="Internship" title={projectInfo.CTC.name} shortDesc={projectInfo.CTC.description}/>
                </div>
                <div className="row">
                    <ProjectTile to="/projects/ryse" imageHeight="400px" imageName="projects/ryse.png" tag="Hackathon" title={projectInfo.Ryse.name} shortDesc={projectInfo.Ryse.description} />
                </div>
                <div className="row">
                    <ProjectTile to="/projects/munkee" reverse="true" imageHeight="400px" imageName="projects/munkee.png" tag="Project" title={projectInfo.Munkee.name} shortDesc={projectInfo.Munkee.description}/>
                </div>
                <div className="row">
                    <ProjectTile to="/projects/vcuts" singleTile = "true" imageHeight="400px" tag="Freelance" title={projectInfo.vCuts.name} shortDesc={projectInfo.vCuts.description}/>
                </div>
                <div className="row">
                    <ProjectTile to="/projects/moodify" reverse="true" imageHeight="400px" imageName="projects/moodify.png" tag="Hackathon" title={projectInfo.Moodify.name} shortDesc={projectInfo.Moodify.description}/>
                </div>
                <div className="row">
                    <ProjectTile to="/projects/prog" imageHeight="400px" imageName="projects/prog.png" tag="Project" title={projectInfo.PROG.name} shortDesc={projectInfo.PROG.description}/>
                </div>
            </div>
        )
    }
};



export default CSSModules(Projects, styles);