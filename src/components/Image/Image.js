import React from 'react';

const Image = (props) => {
    console.log(props.path);
    const imageStyle = {
       'margin': `0 auto`
    }

    return (
        <img style={imageStyle} src={require(`../../assets/images/${props.path}`)} />
    )
}

export default Image;