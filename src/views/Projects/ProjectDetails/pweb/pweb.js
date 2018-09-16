import React from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import CSSModules from 'react-css-modules';
import styles from '../projectDetail.css';
import Button from '../../../../components/Button/Button';

const pweb = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    {projectsInfo.personalWebsite.name}
                </h1>
            </div>
            <span styleName="description" className="container">
                <p>
                    {projectsInfo.personalWebsite.description}
                </p>
            </span>
            <span>
                <div styleName="button-row" className="row">
                    <Button link="http://github.com/billxsheng/personal-website" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                </div>
            </span>
            <span className="container">
                <h3>Technologies Used</h3>
                <div styleName="technologies" className="row">
                    <p>{projectsInfo.personalWebsite.technologies}</p>
                </div>
            </span>
            <span className="container">
                <h3>About this Project</h3>
                <div className="row">
                    <p>{projectsInfo.personalWebsite.about}</p>
                </div>
            </span>
        </span>
    </div>
)

export default CSSModules(pweb, styles);