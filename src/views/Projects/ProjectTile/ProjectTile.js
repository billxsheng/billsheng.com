import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProjectTile.css';
import ProjectsImage from '../../../components/Image/ProjectsImage/ProjectsImage';
import { NavLink } from 'react-router-dom';

class projectTile extends Component {
    state = {
        reverse: this.props.reverse,
    }

    imageStyle = {
        'backgroundColor': this.props.imageBackground,
        'borderTopLeftRadius':'15px',
        'borderBottomLeftRadius':'15px'
    }

    imageStyleReverse = {
        'backgroundColor': this.props.imageBackground,
        'borderBottomRightRadius':'15px',
        'borderTopRightRadius':'15px'
    }

    render() {

        if(this.state.reverse) {
            
            return (             
                <NavLink to={this.props.to} className="row" styleName="project-tile">
                    <div styleName="img-cont" style={this.imageStyle} className="col-md-6">
                        <ProjectsImage top={this.props.top} height={this.props.imageHeight} path={this.props.imageName}/>
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
            )
        }

        return (
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
                <div styleName="img-cont" style = {this.imageStyleReverse}className="col-md-6">
                    <ProjectsImage height={this.props.imageHeight} path={this.props.imageName}/>
                </div>
            </NavLink>
        )
    }
} 

export default CSSModules(projectTile, styles);