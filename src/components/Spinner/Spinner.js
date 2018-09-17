import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Spinner.css';

const Spinner = (props) => (
    <div>
        <img alt="spinner" styleName="loading" height="100px" src={require(`../../assets/images/loading.png`)} />
        <img styleName="logo" alt="logo" src={require(`../../assets/images/logo.png`)} />
    </div>
)

export default CSSModules(Spinner, styles);

