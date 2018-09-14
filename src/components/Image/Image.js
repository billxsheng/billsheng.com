import React from 'react';
import { withRouter } from 'react-router-dom';

const Image = (props) => {
    const imageStyle = {
        'marginTop': props.marginTop,
        'marginBottom': props.marginBottom,
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
        <img className="img-fluid" alt="bill" style={imageStyle} src={require(`../../assets/images/${props.path}`)} />
    )
}

export default withRouter(Image);