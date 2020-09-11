import React, { Component } from 'react';
import styles from '../ProjectDetails.css';
import CSSModules from 'react-css-modules';
import projects from '../../../../assets/projects';
import Image from '../../../../components/Image/Image';
import Button from '../../../../components/Button/Button';
import Fade from 'react-reveal/Fade';
import Icon from '../../../../components/Icon/Icon';
import { NavLink } from 'react-router-dom';

var projectsArray = projects.headings.projectOrder;

class OubreSA extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (projectsArray.indexOf((projects.oubre.reference)) === 0) {
            this.setState({ leftArrow: false });
        }
        if (projectsArray.indexOf((projects.oubre.reference)) === projectsArray.length - 1) {
            this.setState({ rightArrow: false });
        }
    }

    render() {
        console.log(projectsArray[projectsArray.indexOf(projects.oubre.reference) - 1])
        return (
            <div>
                <span styleName="curve" className="container">
                    <div className="row container" style={{ margin: '0 auto' }}>
                        <div className="col-md-2">
                            {this.state.leftArrow ?
                                <NavLink styleName="btn-prev" to={`/projects/${projectsArray[projectsArray.indexOf(projects.oubre.reference) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink> :
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div>
                        <div className="col-md-8">
                            <h1>
                                {projects.oubre.name}
                            </h1>
                        </div>
                        <div className="col-md-2">
                            {this.state.rightArrow ?
                                <NavLink styleName="btn-next" to={`/projects/${projectsArray[projectsArray.indexOf(projects.oubre.reference) + 1]}`} >
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
                            {projects.oubre.description}
                        </p>
                        <div className="row" styleName="tag" >
                            <p className="text-center" styleName="title-p" >{projects.oubre.tag}</p>
                        </div>
                    </Fade>
                </span>
                <div styleName="modal" >
                    <Fade bottom>
                        <h4>Summary</h4>
                        <p>{projects.oubre.content.summary}</p>
                    </Fade>
                    <Fade bottom>
                        <h4>Technology</h4>
                        <p>{projects.oubre.content.technology}</p>
                    </Fade>
                    <Fade bottom>
                        <h4>What I did</h4>
                        <ul className="list-group">
                            <li><p3>Implemented a data streaming platform with Java that performs sentiment analysis on tweets regarding controversial athletes</p3></li>
                            <li><p3>Used Kafka and Spark to ingest, analyze, and load data into a Cassandra data warehouse, allowing results to be queried/displayed</p3></li>
                        </ul>
                    </Fade>
                    <Fade bottom>
                    <Image width="700px" fine="Flowchart" path = "projects/oubresa/flowchart.png" />
                    </Fade>
                    <Fade top>
                        <hr />
                        <div className="row">
                            <Button margin="0px auto" link={"https://github.com/billxsheng/oubre-sentiment-analysis"} btnType="btnLarge">Github</Button>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
};



export default CSSModules(OubreSA, styles);