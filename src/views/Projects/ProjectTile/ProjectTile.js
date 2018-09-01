import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProjectTile.css';

class projectTile extends Component {
    state = {
        reverse: this.props.reverse,
    }

    render() {
        if(this.state.reverse) {
            return (
                <a className="row" styleName="project-tile">
                    <div styleName="image-cont" className="col-md-7">
                        <img/>
                    </div>
                    <div styleName="text-cont" className="col-md-5">
                        <h2>
                            {this.props.title}
                        </h2>
                        <p>
                            {this.props.shortDesc}
                        </p>
                        <p styleName="project-preview-tag" >{this.props.tag}</p>
                    </div>
                </a>
            )
        }

        return (
            <a className="row" styleName="project-tile">
                <div styleName="text-cont" className="col-md-5">
                    <h2>
                        {this.props.title}
                    </h2>
                    <p>
                        {this.props.shortDesc}
                    </p>
                    <p styleName="project-preview-tag" >{this.props.tag}</p>
                </div>
                <div styleName="image-cont" className="col-md-7">
                    <img/>
                </div>
            </a>
        )
    }
} 

export default CSSModules(projectTile, styles);