import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './GraphQL.css';
import galleryInfo from '../../../../assets/gallery';

const graphQL = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    {galleryInfo.graphQL.title}
                </h1>
            </div>
            <span className="container">
                <p>
                    {galleryInfo.graphQL.date}
                </p>
            </span>
            <div styleName="content">
            </div>
        </span>
    </div>
)

export default CSSModules(graphQL, styles);