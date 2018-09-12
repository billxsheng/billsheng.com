import React from 'react';
import { withRouter } from 'react-router-dom';

const Image = (props) => {
    console.log(props.path);
    const imageStyle = {
       'width': 'auto',
       'maxHeight': props.height,
       'position': 'absolute',
       'zIndex': '-2',
       'top': '0',
       'left': '0'
    }

    return (
        <img alt="bill" style={imageStyle} src={require(`../../../assets/images/${props.path}`)} />
    )
}

export default withRouter(Image);