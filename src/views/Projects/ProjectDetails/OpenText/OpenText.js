import React, {Component} from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import styles from '../projectDetail.css';
import CSSModules from 'react-css-modules';

class Blitz extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="container">
                <span className="container">
                    <div className="row">
                        <h1>
                            {projectsInfo.opentext.name}
                        </h1>
                    </div>
                    <p>
                        {projectsInfo.opentext.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p>{projectsInfo.opentext.tag}</p>
                    </div>
                </span>
            </div>
        )
    }
} 

export default CSSModules(Blitz, styles);