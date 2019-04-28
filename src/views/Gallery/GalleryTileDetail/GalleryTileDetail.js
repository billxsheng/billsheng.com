import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './GalleryTileDetail.css';
import {NavLink} from 'react-router-dom';

class GalleryTileDetail extends Component {
    render () {
        const articleName = `text-wrapper-${this.props.article}`;
        const wrapperStyles = {
            paddingLeft: this.props.left,
            paddingRight: this.props.right,
        }
        return (
            <span styleName="outer-wrapper" style={wrapperStyles} >
                <NavLink to={this.props.to} styleName={articleName}>
                    <div styleName="text-div">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.date}</p>
                    </div>
                </NavLink>
            </span>
        )
    }
} 

export default CSSModules(GalleryTileDetail, styles, {allowMultiple: true});