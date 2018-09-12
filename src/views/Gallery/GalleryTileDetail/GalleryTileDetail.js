import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './GalleryTileDetail.css'

const GalleryTileDetail = (props) => {
    const wrapperStyles = {
        'paddingLeft': 'props.left',
        'paddingRight': 'props.right'
    }

    return (
        <span styleName="outer-wrapper" style={wrapperStyles} >
            <div styleName="text-wrapper">
                <div styleName="text-div">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </span>
    )
}

export default CSSModules(GalleryTileDetail, styles);