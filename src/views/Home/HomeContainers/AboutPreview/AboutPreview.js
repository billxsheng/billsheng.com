import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './AboutPreview.css';
import Button from '../../../../components/Button/Button';


const aboutPreview = (props) => (
    <div styleName='aboutPreview'>
        <span className="container">
            <h1>About</h1>
            {/* <Button btnType="btnSmall">About Me</Button> */}
        </span>
        
    



    </div>
)

export default CSSModules(aboutPreview, styles);