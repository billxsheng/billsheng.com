import React, { Component } from 'react';
import styles from '../ProjectDetails.css';
import CSSModules from 'react-css-modules';
import projects from '../../../../assets/projects';
import Image from '../../../../components/Image/Image';
import Button from '../../../../components/Button/Button';
import Fade from 'react-reveal/Fade';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom'; 

var projectsArray = projects.headings.projectOrder;

class LCBONext extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((projects.lcbonext.reference).toLowerCase()) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((projects.lcbonext.reference).toLowerCase()) === projectsArray.length - 1) {
            this.setState({rightArrow: false});
        }
    }
    
    render() {
        return(
            <div>
                <span styleName="curve" className="container">
                    <div className="row container" style={{margin: '0 auto'}}>
                        <div className="col-md-2">
                            {this.state.leftArrow ? 
                                <NavLink styleName="btn-prev" to={`/projects/${projectsArray[projectsArray.indexOf(projects.lcbonext.reference) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <div className="col-md-8">
                            <h1>
                                {projects.lcbonext.name}
                            </h1>
                        </div>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/${projectsArray[projectsArray.indexOf(projects.lcbonext.reference) + 1]}`} >
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
                        {projects.lcbonext.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p className="text-center" styleName="title-p" >{projects.lcbonext.tag}</p>
                    </div>
                    </Fade>
                </span>
                <div styleName="modal" >
                    <Fade bottom>
                    <hr/>
                    <Image width="500px" path = "projects/lcbonext/lcbonext.png" />
                    <hr/>
                    </Fade>
                    <Fade bottom>
                    <h4>Position</h4>
                    <p>{projects.lcbonext.content.position}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Team</h4>
                    <p>{projects.lcbonext.content.team}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Technology</h4>
                    <p>{projects.lcbonext.content.technology}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>What I did</h4>
                    <ul className="list-group">
                    <li><p3>Built a cron-based web scraper that extracts marketable content from 950+ webpages, increasing app conversion paths from 9 to 400</p3></li>
                    <li><p3>Developed a Node ETL pipeline that tags products with new properties to improve search precision, decreasing search exits by 25%</p3></li>
                    <li><p3>Designed an indexing strategy with ElasticSearch aliases that prevents data loss during API crashes in 2 large-scale data pipelines</p3></li>
                    <li><p3>Leveraged Redis caching strategies to scale store inventory microservice, improving performance audit of core products app by ~15%</p3></li>
                    <li><p3>Co-built and deployed a Node recommendation engine, leveraging compound ElasticSearch queries to address customer indecision</p3></li>
                    <li><p3>Created technical documents for POC app and presented to corporate stakeholders, receiving approval for deployment to 100+ stores</p3></li>
                    </ul>
                    </Fade>
                    {/* <Fade top>
                    <hr/>
                    <div className="row">
                    <Button margin="0px auto" link={"https://devpost.com/software/airdrums-39k0ny"} btnType = "btnLarge">Devpost</Button>
                    </div>
                    <br/>
                    <div className="row">
                    <Button margin="0px auto" link={"https://github.com/billxsheng/airdrums"} btnType = "btnLarge">Github</Button>
                    </div>
                    </Fade> */}
                </div>
            </div>
        )
    }
};



export default CSSModules(LCBONext, styles);