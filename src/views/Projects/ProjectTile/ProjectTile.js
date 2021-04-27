import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProjectTile.css';
import ProjectsImage from '../../../components/Image/ProjectsImage/ProjectsImage';
import {NavLink} from 'react-router-dom'


class projectTile extends Component {
    state = {
        reverse: this.props.reverse
    }

    render() {

        if(this.state.reverse) {
            return (     
                <div>
                    <NavLink to={this.props.to} className="row" styleName="project-tile">
                        <div styleName="img-cont" className="col-md-6">
                            <ProjectsImage reverse top={this.props.top} height={this.props.imageHeight} path={this.props.imageName}/>
                        </div>
                        <div styleName="text-cont" className="col-md-6">
                            <h2>
                                {this.props.title}
                            </h2>
                            <p>
                                {this.props.shortDesc}
                            </p>
                            <p styleName="project-preview-tag" >{this.props.tag}</p>
                        </div>
                    </NavLink>
                    <NavLink to={this.props.to} className="row" styleName="project-tile-mobile">
                        <div styleName="text-cont" className="col-md-6">
                            <h2>
                                {this.props.title}
                            </h2>
                            <p>
                                {this.props.shortDesc}
                            </p>
                            <p styleName="project-preview-tag" >{this.props.tag}</p>
                        </div>
                        <div styleName="img-cont" className="col-md-6">
                            <ProjectsImage top={this.props.top} height={this.props.imageHeight} path={this.props.imageName}/>
                        </div>                
                    </NavLink>
                </div>        
            )
        } else if (this.props.singleTile) {
            return (
                <div>
                    <NavLink to={this.props.to} className="row" styleName="project-tile">
                        <div styleName="text-cont" className="col-md-12">
                            <h2>
                                {this.props.title}
                            </h2>
                            <p>
                                {this.props.shortDesc}
                            </p>
                            <p styleName="project-preview-tag" >{this.props.tag}</p>
                        </div>
                    </NavLink>
                    <NavLink to={this.props.to} className="row" styleName="project-tile-mobile-single">
                        <div styleName="text-cont" className="col-md-6">
                            <h2>
                                {this.props.title}
                            </h2>
                            <p>
                                {this.props.shortDesc}
                            </p>
                            <p styleName="project-preview-tag" >{this.props.tag}</p>
                        </div>
                    </NavLink>
                </div>
            )
        } else {
            return (
                <div>
                    <NavLink to={this.props.to} className="row" styleName="project-tile">
                        <div styleName="text-cont" className="col-md-6">
                            <h2>
                                {this.props.title}
                            </h2>
                            <p>
                                {this.props.shortDesc}
                            </p>
                            <p styleName="project-preview-tag" >{this.props.tag}</p>
                        </div>
                        <div styleName="img-cont" className="col-md-6">
                            <ProjectsImage height={this.props.imageHeight} path={this.props.imageName}/>
                        </div>
                    </NavLink>
                    <NavLink to={this.props.to} className="row" styleName="project-tile-mobile">
                        <div styleName="text-cont" className="col-md-6">
                            <h2>
                                {this.props.title}
                            </h2>
                            <p>
                                {this.props.shortDesc}
                            </p>
                            <p styleName="project-preview-tag" >{this.props.tag}</p>
                        </div>
                        <div styleName="img-cont" className="col-md-6">
                            <ProjectsImage height={this.props.imageHeight} path={this.props.imageName}/>
                        </div>
                    </NavLink>
                </div>
            )
        }
    }
} 

export default CSSModules(projectTile, styles, {allowMultiple: true});