import React, {Component} from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import CSSModules from 'react-css-modules';
import styles from '../projectDetail.css';
import Button from '../../../../components/Button/Button';

class pweb extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="container">
                <span className="container">
                    <div className="row">
                        <h1>
                            {projectsInfo.personalWebsite.name}
                        </h1>
                    </div>
                    <p>
                        {projectsInfo.personalWebsite.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p>Side Project</p>
                    </div>
                </span>
                <span className="container">
                    <h3>Technologies Used</h3>
                    <p>{projectsInfo.personalWebsite.technologies}</p>
                </span>
                <span className="container">
                    <h3>Summary</h3>
                    <p>{projectsInfo.personalWebsite.about}</p>
                </span>
                <div styleName="button-row" className="row">
                        <Button link="http://github.com/billxsheng/personal-website" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                    </div>
            </div>
        )
    }
} 

export default CSSModules(pweb, styles);