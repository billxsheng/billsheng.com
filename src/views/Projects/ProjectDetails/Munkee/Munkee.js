import React, {Component} from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import styles from '../projectDetail.css';
import CSSModules from 'react-css-modules';
import Button from '../../../../components/Button/Button';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom';

var projectsArray = projectsInfo.headings.webMobile.order;

class Munkee extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        window.scrollTo(0,0);
        if(projectsArray.indexOf((projectsInfo.munkee.name).toLowerCase()) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((projectsInfo.munkee.name).toLowerCase()) === projectsArray.length - 1) {
            this.setState({rightArrow: false});
        }
    }
    
    render() {
        return (
            <div className="container" styleName="overlay">
                <span className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {this.state.leftArrow ? 
                                <NavLink styleName="btn-prev" to={`/projects/web-mobile/${projectsArray[projectsArray.indexOf(projectsInfo.munkee.name.toLowerCase()) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <div className="col-md-4">
                            <h1>
                                {projectsInfo.munkee.name}
                            </h1>
                        </div>
                        <div className="col-md-4">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/web-mobile/${projectsArray[projectsArray.indexOf(projectsInfo.munkee.name.toLowerCase()) + 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </a>
                            }
                        </div> 
                    </div>
                    <p styleName="description-p">
                        {projectsInfo.munkee.description}
                    </p>
                    {/* <div className="row" styleName="tag" >
                        <p>{projectsInfo.munkee.tag}</p>
                    </div> */}
                </span>
                <span className="container">
                    <h3>Technologies Used</h3>
                    <p>{projectsInfo.munkee.technologies}</p>
                </span>
                <span className="container">
                    <h3>Summary</h3>
                    <p>{projectsInfo.munkee.about}</p>
                </span>
                <div styleName="button-row" className="row">
                        <Button link="http://github.com/billxsheng/munkee" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                        <Button link="http://munkee.herokuapp.com" newPage = 'true' btnType="btnLarge" >Play Munkee</Button>
                </div>
            </div>
        )
    }
} 

export default CSSModules(Munkee, styles);