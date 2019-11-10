import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './MainButtonRow.css';
import Button from '../Button';
import Icon from '../../Icon/Icon';
import links from '../../../assets/links';

const MainButtonRow = (props) => (
    <div className="row text-center" styleName="btn-container">
        <div className="col-md-3">
            <Button resume="true" btnType="btnIcon" ><Icon iconName="far fa-file" iconType="iconSmall" /></Button>
        </div>
        <div className="col-md-3">
            <Button newPage="false" link={links.email} btnType="btnIcon" ><Icon iconName="far fa-envelope" iconType="iconSmall" /></Button>
        </div>
        <div className="col-md-3">
            <Button link={links.github} btnType="btnIcon" ><Icon iconName="fab fa-github" iconType="iconSmall" /></Button>
        </div>
        <div className="col-md-3">
            <Button link={links.linkedin} btnType="btnIcon" ><Icon iconName="fab fa-linkedin" iconType="iconSmall" /></Button>
        </div>
    </div>
)
export default CSSModules (MainButtonRow, styles);