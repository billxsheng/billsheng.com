import React, {Component} from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import styles from '../projectDetail.css';
import CSSModules from 'react-css-modules';


class canadianTire extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="container">
                <span className="container">
                    <div className="row">
                        <h1>
                            {projectsInfo.ctc.name}
                        </h1>
                    </div>
                    <p>
                        {projectsInfo.ctc.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p>{projectsInfo.ctc.tag}</p>
                    </div>
                </span>
                <span className="container">
                    <h3>Technologies Used</h3>
                    <p>{projectsInfo.ctc.technologies}</p>
                </span>
                <span className="container">
                    <h3>Summary</h3>
                    <p>{projectsInfo.ctc.about}</p>
                </span>
            </div>
        )
    }
} 
export default CSSModules(canadianTire, styles);