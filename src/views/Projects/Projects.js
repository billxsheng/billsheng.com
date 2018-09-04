import React, { Component } from 'react';
import styles from './Projects.css';
import CSSModules from 'react-css-modules';
import ProjectTile from './ProjectTile/ProjectTile';

class Projects extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div styleName="about" className="container">
                <span className="container">
                    <h1>
                        Projects
                    </h1>
                </span>
                <ProjectTile tag="Project" title="Skout" shortDesc="LinkedIn for Athletes" />
                <ProjectTile tag="Internship" title="Canadian Tire" reverse="true" shortDesc="Developing in one of Canada's largest retai companies."/>
                <ProjectTile tag="Project" title="Blitz" shortDesc="Sports Notification Innovation"/>
                <ProjectTile tag="Project" title="Munkee" reverse="true" shortDesc="Just for fun"/>
                <ProjectTile tag="Freelance" title="VCuts" shortDesc="Barber Website"/>
                <ProjectTile tag="Hackathon" title="Moodify" reverse="true"  shortDesc="Combining machine learning and job searching"/>
                <ProjectTile tag="Project" title="PROG" reverse="true"  shortDesc="Product Management Tool"/>
            </div>
        )
    }
};



export default CSSModules(Projects, styles);