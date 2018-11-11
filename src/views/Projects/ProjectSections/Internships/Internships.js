import React, { Component } from 'react';
import styles from './Internships.css';
import CSSModules from 'react-css-modules';
import ProjectTile from '../../ProjectTile/ProjectTile';
import projectInfo from '../../../../assets/projectsInfo';


class Internships extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    

    render() {
        return(
            <div className="container">
                <div styleName="curve">
                    <span className="container">
                        <h1>
                            Internships
                        </h1>
                    </span>
                    <span className="container">
                        <p>
                            Reflection of previous internships.
                        </p>
                    </span>
                </div>
                <div className="row">
                    <ProjectTile to="/projects/internships/industry4" singleTile = "true" imageHeight="400px" imageName="projects/pweb.png" tag="Design Team" title={projectInfo.Industry4.name} shortDesc={projectInfo.Industry4.description} />
                </div>
                <div className="row">
                    <ProjectTile to="/projects/internships/canadian-tire" top="25px" imageHeight="400px" imageName="projects/ctc.png" tag="Internship" title={projectInfo.CTC.name} shortDesc={projectInfo.CTC.description}/>
                </div>
            </div>
        )
    }
};



export default CSSModules(Internships, styles);