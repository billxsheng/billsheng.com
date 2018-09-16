import React, {Component} from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import CSSModules from 'react-css-modules';
import styles from '../projectDetail.css';
import Button from '../../../../components/Button/Button';

class Ryse extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <span className="container">
                    <div className="row">
                        <h1>
                            {projectsInfo.Ryse.name}
                        </h1>
                    </div>
                    <span styleName="description" className="container">
                        <p>
                            {projectsInfo.Ryse.description}
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
                            <p>{projectsInfo.Ryse.technologies}</p>
                        </div>
                    </span>
                    <span className="container">
                        <h3>About this Project</h3>
                        <div className="row">
                            <p>{projectsInfo.Ryse.about}</p>
                        </div>
                    </span>
                </span>
            </div>
        )
    }
} 

export default CSSModules(Ryse, styles);