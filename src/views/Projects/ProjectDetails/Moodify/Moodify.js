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
            <div className="container">
                <span className="container">
                    <div className="row">
                        <h1>
                            {projectsInfo.moodify.name}
                        </h1>
                    </div>
                    <p>
                        {projectsInfo.moodify.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p>{projectsInfo.moodify.tag}</p>
                    </div>
                </span>
                <span className="container">
                    <h3>Technologies Used</h3>
                    <p>{projectsInfo.moodify.technologies}</p>
                </span>
                <span className="container">
                    <h3>Summary</h3>
                    <p>{projectsInfo.moodify.about}</p>
                </span>
                <div styleName="button-row" className="row">
                        <Button link="http://github.com/billxsheng/moodify" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                </div>
            </div>
        )
    }
} 

export default CSSModules(Moodify, styles);