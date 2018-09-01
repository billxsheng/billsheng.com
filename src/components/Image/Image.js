import React from 'react';

const Image = (props) => {
    console.log(props.path);
    const imageStyle = {
       'transform': `scale(${props.scale}, ${props.scale})`
    }

    return (
        <img style={imageStyle} src={require(`../../assets/images/${props.path}`)} />
    )
}

export default Image;