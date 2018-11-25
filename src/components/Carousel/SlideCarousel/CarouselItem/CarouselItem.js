import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import {NavLink} from 'react-router-dom';
import styles from './CarouselItem.css';

class carouselItem extends Component {
    state = {
        showcase: this.props.showcase
    }

    render() {
        const projectName = `upper-wrapper-${this.props.type}`

        if(this.state.showcase) {
            return (
                <div styleName="carousel-wrapper item-preview-tile">
                    <div styleName={projectName}>
                    </div>
                    <div styleName="lower-wrapper" className="row btn-disabled">
                        <div styleName="text-div">
                            <h3>{this.props.title}</h3>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <NavLink styleName="carousel-wrapper item-preview-tile" to={this.props.to} className='btn'>
                    <div styleName={projectName}>
                    </div>
                    <div styleName="lower-wrapper" className="row">
                        <div styleName="text-div">
                            <h3>{this.props.title}</h3>
                            <p>{this.props.date}</p>
                            {this.props.tag ? <div styleName="tag">
                                <p>{this.props.tag}</p>
                            </div> : null}
                        </div>
                    </div>
                </NavLink>
            )
        }
    }
}   


export default CSSModules(carouselItem, styles, {allowMultiple: true});