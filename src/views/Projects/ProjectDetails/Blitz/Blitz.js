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
            <div className="container" styleName="overlay">
                <span className="container">
                    <div className="row">
                        <h1>
                            {projectsInfo.blitz.name}
                        </h1>
                    </div>
                    <p styleName="description-p">
                        {projectsInfo.blitz.description}
                    </p>
                    {/* <div className="row" styleName="tag" >
                        <p>{projectsInfo.blitz.tag}</p>
                    </div> */}
                </span>
                <span className="container">
                    <h3>Technologies</h3>
                    <p>{projectsInfo.blitz.technologies}</p>
                </span>
                <div styleName="button-row" className="row">
                    <Button link="http://github.com/billxsheng/blitz" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                </div>
            </div>
        )
    }
} 

export default CSSModules(Blitz, styles);