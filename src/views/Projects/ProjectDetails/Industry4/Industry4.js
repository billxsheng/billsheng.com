import React, {Component} from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import styles from '../projectDetail.css';
import CSSModules from 'react-css-modules';

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
                        {projectsInfo.Industry4.name}
                        </h1>
                    </div>
                    <p>
                        {projectsInfo.Industry4.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p>Design Team</p>
                    </div>
                </span>
                <span className="container">
                    <h3>Summary</h3>
                    <p>{projectsInfo.Industry4.about}</p>
                    <p>More coming soon :)</p>
                </span>
                {/* <div styleName="button-row" className="row">
                        <Button link="http://github.com/billxsheng/moodify" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                </div> */}
            </div>
        )
    }
} 

export default CSSModules(Moodify, styles);