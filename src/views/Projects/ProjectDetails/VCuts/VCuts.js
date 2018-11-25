import React, {Component} from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import CSSModules from 'react-css-modules';
import styles from '../projectDetail.css';
import Button from '../../../../components/Button/Button'

class VCuts extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="container">
                <span className="container">
                    <div className="row">
                        <h1>
                        {projectsInfo.vcuts.name}
                        </h1>
                    </div>
                    <p>
                    {projectsInfo.vcuts.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p>{projectsInfo.vcuts.tag}</p>
                    </div>
                </span>
                <span className="container">
                    <h3>Summary</h3>
                        <p>{projectsInfo.vcuts.about}</p>
                </span>
                <div styleName="button-row" className="row">
                    <Button link="http://github.com/billxsheng/freelance-vcuts" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                </div>
            </div>
        )
    }
} 

export default CSSModules(VCuts, styles);