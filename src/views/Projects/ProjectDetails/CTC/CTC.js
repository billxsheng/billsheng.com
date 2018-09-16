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
            <div>
                <span className="container">
                <div className="row">
                    <h1>
                        {projectsInfo.CTC.name}
                    </h1>
                </div>
                <span styleName="description-no-link" className="container">
                    <p>
                        {projectsInfo.CTC.description}
                    </p>
                </span>
                <span className="container">
                    <h3>Technologies Used</h3>
                    <div styleName="technologies" className="row">
                        <p>{projectsInfo.CTC.technologies}</p>
                    </div>
                </span>
                <span className="container">
                    <h3>About this Project</h3>
                    <div className="row">
                        <p>{projectsInfo.CTC.about}</p>
                    </div>
                </span>
                </span>
            </div>
        )
    }
} 
export default CSSModules(canadianTire, styles);