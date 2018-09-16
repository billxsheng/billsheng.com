import React, {Component} from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import Button from '../../../../components/Button/Button';
import styles from '../projectDetail.css';
import CSSModules from 'react-css-modules';

class Blitz extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div>
            <span className="container">
                    <h1>
                        {projectsInfo.Blitz.name}
                    </h1>
                    <div className="row" styleName="tag" >
                        <p>Project</p>
                    </div>
                    <p>
                        {projectsInfo.Blitz.description}
                    </p>
                <span className="container">
                    <h3>Technologies Used</h3>
                    <p>{projectsInfo.Blitz.technologies}</p>
                </span>
                <span className="container">
                    <h3>Summary</h3>
                    <p>{projectsInfo.Blitz.about}</p>
                </span>
                <div styleName="button-row" className="row">
                        <Button link="http://github.com/billxsheng/blitz" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                </div>
            </span>
        </div>
        )
    }
} 

export default CSSModules(Blitz, styles);