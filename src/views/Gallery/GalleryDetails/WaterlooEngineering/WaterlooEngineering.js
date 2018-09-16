import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './WaterlooEngineering.css';
import galleryInfo from '../../../../assets/gallery';

const wateng = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    {galleryInfo.firstYear.title}
                </h1>
            </div>
            <span className="container">
                <p>
                    {galleryInfo.firstYear.date}
                </p>
            </span>
            <div styleName="content">
            </div>
        </span>
    </div>
)

export default CSSModules(wateng, styles);