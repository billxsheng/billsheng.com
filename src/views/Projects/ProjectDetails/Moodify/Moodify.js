import React, {Component} from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import styles from '../projectDetail.css';
import CSSModules from 'react-css-modules';
import Button from '../../../../components/Button/Button';

class Moodify extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    
    render () {
        return (
        <div>
            <span className="container">
                <div className="row">
                    <h1>
                        {projectsInfo.Moodify.name}
                    </h1>
                </div>
                <span styleName="description" className="container">
                    <p>
                        {projectsInfo.Moodify.description}
                    </p>
                </span>
                <span>
                    <div styleName="button-row" className="row">
                        <Button link="http://github.com/billxsheng/moodify" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                    </div>
                </span>
                <span className="container">
                    <h3>Technologies Used</h3>
                    <div styleName="technologies" className="row">
                        <p>{projectsInfo.Moodify.technologies}</p>
                    </div>
                </span>
                <span className="container">
                    <h3>About this Project</h3>
                    <div className="row">
                        <p>{projectsInfo.Moodify.about}</p>
                    </div>
                </span>
            </span>
        </div>
        )
    }
} 

export default CSSModules(Moodify, styles);