import React, { Component } from 'react';
import styles from '../ProjectDetails.css';
import CSSModules from 'react-css-modules';
import ProjectsInfo from '../../../../assets/projectsInfo';
import Image from '../../../../components/Image/Image';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom'; 
import Fade from 'react-reveal/Fade';


var projectsArray = ProjectsInfo.headings.projectOrder;

class Ctc extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((ProjectsInfo.ctc.link).toLowerCase()) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((ProjectsInfo.ctc.link).toLowerCase()) === projectsArray.length - 1) {
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
                                <NavLink styleName="btn-prev" to={`/projects/experience/${projectsArray[projectsArray.indexOf(ProjectsInfo.ctc.link.toLowerCase()) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <Fade bottom>
                        <div className="col-md-8">
                            <h1>
                                {ProjectsInfo.ctc.name}
                            </h1>
                        </div>
                        </Fade>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/web-mobile/${projectsArray[projectsArray.indexOf(ProjectsInfo.ctc.link.toLowerCase()) + 1]}`} >
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
                        {ProjectsInfo.ctc.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p className="text-center" styleName="title-p" >{ProjectsInfo.ctc.tag}</p>
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
                    <p>{ProjectsInfo.ctc.content.position}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Technology</h4>
                    <p>{ProjectsInfo.ctc.content.technology}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>My Tasks</h4>
                    <ul className="list-group">
                    <li><p3>Engaged in all phases of the SDLC within the scrum team during creation of EIM products</p3></li>
                    <li><p3>Wrote monitoring services, error detection software, and unit tests in Java while ensuring best practices to manage numerous agents running on external networks</p3></li>
                    <li><p3>Revised, upgraded 6000+ lines of TypeScript in Angular dashboard to be used by 1500+ stakeholders</p3></li>
                    <li><p3>Implemented a centralized store design pattern on top of Angular website using NGRX for more reusable code structure; reduced code by 40%</p3></li>
                    </ul>
                    </Fade>
                    <Fade bottom>
                    <h4>Evaluation</h4>
                    <p>{ProjectsInfo.ctc.content.evaluation}</p>
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