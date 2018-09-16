import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './SNL.css';
import galleryInfo from '../../../../assets/gallery';

const SNL = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    {galleryInfo.saturdayNightLights.title}
                </h1>
            </div>
            <span className="container">
                <p>
                    {galleryInfo.saturdayNightLights.date}
                </p>
            </span>
            <div styleName="content">
            </div>
        </span>
    </div>
)

export default CSSModules(SNL, styles);