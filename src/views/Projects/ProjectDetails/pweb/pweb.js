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
            <div>
                    <span className="container">
                            <h1>
                                {projectsInfo.personalWebsite.name}
                            </h1>
                            <div className="row" styleName="tag" >
                                <p>Project</p>
                            </div>
                            <p>
                                {projectsInfo.personalWebsite.description}
                            </p>
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
                    </span>
                </div>
        )
    }
} 

export default CSSModules(pweb, styles);