import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './GalleryTileDetail.css';
import {NavLink} from 'react-router-dom';

const GalleryTileDetail = (props) => {
    const wrapperStyles = {
        paddingLeft: props.left,
        paddingRight: props.right
    }

    return (
        <span styleName="outer-wrapper" style={wrapperStyles} >
            <NavLink to="/" styleName="text-wrapper">
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