import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import {NavLink} from 'react-router-dom';
import styles from './CarouselItem.css';

class CarouselItem extends Component {
    state = {
        showcase: this.props.showcase
    }

    render() {
        const projectName = `upper-wrapper-${this.props.type}`
        const projectNameShowcase = `upper-wrapper-showcase-${this.props.type}`


        if(this.state.showcase) {
            return (
                <div styleName="carousel-wrapper item-preview-tile default-cursor" className="btn" >
                    <div styleName={projectNameShowcase}>
                    </div>
                    <div styleName="lower-wrapper-showcase" className="row">
                        <div styleName="text-div">
                            <h3>{this.props.title}</h3>
                            <p>{this.props.description}</p>
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
                            <p>{this.props.description}</p>
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


export default CSSModules(CarouselItem, styles, {allowMultiple: true});