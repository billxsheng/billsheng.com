import React, { Component } from 'react';
import styles from '../ProjectDetails.css';
import CSSModules from 'react-css-modules';
import projects from '../../../../assets/projects';
import Image from '../../../../components/Image/Image';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom'; 
import Fade from 'react-reveal/Fade';


var projectsArray = projects.headings.projectOrder;

class Ctc extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((projects.ctc.reference)) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((projects.ctc.reference)) === projectsArray.length - 1) {
            this.setState({rightArrow: false});
        }
    }
    
    render() {
        return (
            <div>
                <span styleName="curve" className="container">
                    <div className="row container" style={{margin: '0 auto'}}>
                        <div className="col-md-2">
                            {this.state.leftArrow ? 
                                <NavLink styleName="btn-prev" to={`/projects/${projectsArray[projectsArray.indexOf(projects.ctc.reference) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <div className="col-md-8">
                            <h1>
                                {projects.ctc.name}
                            </h1>
                        </div>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/${projectsArray[projectsArray.indexOf(projects.ctc.reference) + 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </a>
                            }
                        </div> 
                    </div>
                    <Fade bottom>
                    <p>
                        {projects.ctc.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p className="text-center" styleName="title-p" >{projects.ctc.tag}</p>
                    </div>
                    </Fade>
                </span>
                <div styleName="modal" >
                    <Fade bottom>
                    <hr/>
                    <Image width="500px" path = "projects/ctc/ctc.png" />
                    <hr/>
                    </Fade>
                    <Fade bottom>
                    <h4>Position</h4>
                    <p>{projects.ctc.content.position}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Technology</h4>
                    <p>{projects.ctc.content.technology}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>My Tasks</h4>
                    <ul className="list-group">
                    <li><p3>Excelled in a fast-paced agile work environment</p3></li>
                    <li><p3>Engineered large-scale virtualized deployments using VMWare </p3></li>
                    <li><p3>Created 10+ PowerShell automation scripts for seamless configuration of enterprise servers; scripts to be used across IT community (200+ employees)</p3></li>
                    </ul>
                    </Fade>
                    <Fade bottom>
                    <h4>Evaluation</h4>
                    <p>{projects.ctc.content.evaluation}</p>
                    </Fade>
                    <Fade bottom>
                    <Image width="500px" withRadius fine="Welcome Sign" path ="projects/ctc/ctc-1.png" />
                    </Fade>
                    <Fade bottom>
                    <Image width="500px" withRadius fine="Office in Toronto, Ontario" path ="projects/ctc/ctc-2.png" />
                    </Fade>
                </div> 
            </div>
        )
    }
};



export default CSSModules(Ctc, styles);