import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './GalleryTileDetail.css';
import {NavLink} from 'react-router-dom';

const GalleryTileDetail = (props) => {
    
    const wrapperStyles = {
        paddingLeft: props.left,
        paddingRight: props.right,
    }

    const bgStyle = {
        background: `linear-gradient(to bottom, ${props.color}, ${props.color}), url(${require('../../../assets/images/gallery/' + props.path)})`,
        backgroundSize: 'cover'
    }

    return (
        <span styleName="outer-wrapper" style={wrapperStyles} >
            <NavLink to={props.to} styleName="text-wrapper" style={bgStyle}>
                <div styleName="text-div">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <p>{props.date}</p>
                </div>
            </NavLink>
        </span>
    )
}

export default CSSModules(GalleryTileDetail, styles);