import React, { Component } from 'react';
import styles from '../ProjectDetails.css';
import CSSModules from 'react-css-modules';
import ProjectsInfo from '../../../../assets/projectsInfo';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom'; 
import Fade from 'react-reveal/Fade';

var projectsArray = ProjectsInfo.headings.projectOrder;

class Freelance extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((ProjectsInfo.freelance.name).toLowerCase()) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((ProjectsInfo.freelance.name).toLowerCase()) === projectsArray.length - 1) {
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
                                <NavLink styleName="btn-prev" to={`/projects/experience/${projectsArray[projectsArray.indexOf(ProjectsInfo.freelance.name.toLowerCase()) - 1]}`} >
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
                                {ProjectsInfo.freelance.name}
                            </h1>
                        </div>
                        </Fade>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/experience/${projectsArray[projectsArray.indexOf(ProjectsInfo.freelance.name.toLowerCase()) + 1]}`} >
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
                        {ProjectsInfo.freelance.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p className="text-center" styleName="title-p" >{ProjectsInfo.freelance.tag}</p>
                    </div>
                    </Fade>
                </span>
                <div styleName="modal" >
                    <Fade bottom>
                    <hr/>
                    <h4>Position</h4>
                    <p>{ProjectsInfo.freelance.content.position}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Technology</h4>
                    <p>{ProjectsInfo.freelance.content.technology}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Summary</h4>
                    <p>{ProjectsInfo.freelance.content.summary}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>My Tasks</h4>
                    <ul className="list-group">
                    <li><p3>Interfaced with clients to build several full stack applications using React JS, Angular 6, and Node JS</p3></li>
                    <li><p3>Streamlined dynamic content management using MongoDB for low-code versatility; decreased existing redeployment instances by 90%</p3></li>
                    <li><p3>Built a full stack barber website which included an email service, contact form, and dynamic gallery</p3></li>
                    </ul>
                    </Fade>
                </div>
            </div>
        )
    }
};



export default CSSModules(Freelance, styles);