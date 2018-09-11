import React, { Component } from 'react';
import styles from './Projects.css';
import CSSModules from 'react-css-modules';
import ProjectTile from './ProjectTile/ProjectTile';
import { Route } from 'react-router-dom';
import Skout from './ProjectDetails/Skout/Skout';

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
                
                <ProjectTile to="/projects/skout" imageHeight="400px" imageName="moodify.png" tag="Project" title="Skout" shortDesc="LinkedIn for Athletes" />
                <ProjectTile to="/projects/skout" reverse="true"  imageHeight="400px" imageName="ryse.png" tag="Hackathon" title="Ryse" shortDesc="Networking application for ex-criminals." />
                <ProjectTile to="/skout" top="25px" imageHeight="400px" imageName="Canadian-Tire.png" tag="Internship" title="Canadian Tire" shortDesc="First Internship"/>
                <ProjectTile to="/skout" reverse="true" imageHeight="400px" imageName="blitz.png" tag="Project" title="Blitz" shortDesc="Sports Notification Innovation"/>
                <ProjectTile to="/skout" imageHeight="400px" imageName="munkee.png" tag="Project" title="Munkee" shortDesc="Just for fun"/>
                <ProjectTile to="/skout" reverse="true" imageHeight="400px" imageName="ryse.png" tag="Freelance" title="VCuts" shortDesc="Barber Website"/>
                <ProjectTile to="/skout" imageHeight="400px" imageName="moodify.png" tag="Hackathon" title="Moodify" shortDesc="Combining machine learning and job searching"/>
                <ProjectTile to="/skout" reverse="true" imageHeight="400px" imageName="prog.png" tag="Project" title="PROG" shortDesc="Product Management Tool"/>
                <Route path="/projects/skout" exact component={Skout} />
            </div>
        )
    }
};



export default CSSModules(Projects, styles);