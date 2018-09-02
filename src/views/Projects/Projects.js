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
                <ProjectTile tag="Project" title="Blitz" shortDesc="Sports notification innovation." />
                <ProjectTile tag="Internship" title="Blitz" reverse="true" shortDesc="Sports notification innovation."/>
            </div>
        )
    }
};



export default CSSModules(Projects, styles);