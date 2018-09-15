import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './GraphQL.css';

const graphQL = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    GraphQL
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

export default CSSModules(graphQL, styles);