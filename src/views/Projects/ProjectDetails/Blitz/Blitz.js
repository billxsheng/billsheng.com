import React from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import Button from '../../../../components/Button/Button';
import styles from '../projectDetail.css';
import CSSModules from 'react-css-modules';

const Blitz = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    {projectsInfo.Blitz.name}
                </h1>
            </div>
            <span styleName="description" className="container">
                <p>
                    {projectsInfo.Blitz.description}
                </p>
            </span>
            <span>
                <div styleName="button-row" className="row">
                    <Button link="http://github.com/billxsheng/blitz" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                </div>
            </span>
            <span className="container">
                <h3>Technologies Used</h3>
                <div styleName="technologies" className="row">
                    <p>{projectsInfo.Blitz.technologies}</p>
                </div>
            </span>
            <span className="container">
                <h3>About this Project</h3>
                <div className="row">
                    <p>{projectsInfo.Blitz.about}</p>
                </div>
            </span>
        </span>
    </div>
)

export default CSSModules(Blitz, styles);