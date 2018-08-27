import React from 'react';

import classes from './Logo.css';

const logo = (props) => {     
    return (
        <img className={classes.logo} src={require('../../assets/images/logo.png')} alt="logo" />
    )   
}

export default logo;