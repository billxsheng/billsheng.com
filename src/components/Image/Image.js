import React from 'react';
import { withRouter } from 'react-router-dom';

const Image = (props) => {
    console.log(props.path);
    const imageStyle = {
       'margin': `0 auto`,
       'width': 'auto',
       'maxHeight': props.height,
       'top': props.top,
       'position': 'relative'
    }

    return (
        <img className="img-fluid" alt="bill" style={imageStyle} src={require(`../../assets/images/${props.path}`)} />
    )
}

export default withRouter(Image);