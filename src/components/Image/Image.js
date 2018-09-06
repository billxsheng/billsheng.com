import React from 'react';
import { withRouter } from 'react-router-dom';

const Image = (props) => {
    console.log(props.path);
    const imageStyle = {
       'margin': `0 auto`,
       'width': 'auto',
       'height': props.height,
       'top': props.top,
    }

    return (
        <img alt="bill" style={imageStyle} src={require(`../../assets/images/${props.path}`)} />
    )
}

export default withRouter(Image);