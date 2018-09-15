import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './SNL.css';

const SNL = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    SNL
                </h1>
            </div>
            <span className="container">
                <p>
                    Coming Soon
                </p>
            </span>
            <div styleName="content">
            </div>
        </span>
    </div>
)

export default CSSModules(SNL, styles);