import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProjectsImage.css';

const Image = (props) => {
    const imageStyle = {
       'marginLeft': `auto`,
       'marginRight': `auto`,
       'width': 'auto',
       'maxHeight': props.height,
       'display': 'block',
       'verticalAlign': 'middle',
       'position': 'relative',
       'borderRadius': '15px'
    }

    return (
        <img alt="bill" styleName="image" style={imageStyle} src={require(`../../../assets/images/${props.path}`)} />
    )
}

export default  CSSModules(Image, styles);