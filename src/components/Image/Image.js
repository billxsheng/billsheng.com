import React from 'react';

const Image = (props) => {
    console.log(props.path);
    const imageStyle = {
       'margin': `0 auto`,
       'width': props.width,
       'height': '100%'
    }

    return (
        <img alt="bill" style={imageStyle} src={require(`../../assets/images/${props.path}`)} />
    )
}

export default Image;