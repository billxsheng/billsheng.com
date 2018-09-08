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
                <span className="container">
                    <h1>
                        Projects
                    </h1>
                </span>
                <ProjectTile to="/projects/skout"  imageHeight="200px" imageName="Canadian-Tire.png" tag="Project" title="Skout" shortDesc="LinkedIn for Athletes" />
                <ProjectTile to="/skout" top="25px" imageHeight="280px" imageName="Canadian-Tire.png" tag="Internship" title="Canadian Tire" reverse="true" shortDesc="Developing in one of Canada's largest retai companies."/>
                <ProjectTile to="/skout" top="15px" imageHeight="300px" imageName="blitz.png" tag="Project" title="Blitz" shortDesc="Sports Notification Innovation"/>
                <ProjectTile to="/skout" top="40px" imageHeight="300px" imageName="munkee.png" tag="Project" title="Munkee" reverse="true" shortDesc="Just for fun"/>
                <ProjectTile to="/skout" imageHeight="200px" imageName="Canadian-Tire.png" tag="Freelance" title="VCuts" shortDesc="Barber Website"/>
                <ProjectTile to="/skout" imageHeight="200px" imageName="Canadian-Tire.png" tag="Hackathon" title="Moodify" reverse="true"  shortDesc="Combining machine learning and job searching"/>
                <ProjectTile to="/skout" imageHeight="320px" imageName="prog.png" tag="Project" title="PROG" shortDesc="Product Management Tool"/>

                <Route path="/projects/skout" exact component={Skout} />
            </div>
        )
    }
};



export default CSSModules(Projects, styles);