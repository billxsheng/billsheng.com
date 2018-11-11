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
                        {projectsInfo.vCuts.name}
                        </h1>
                    </div>
                    <p>
                    {projectsInfo.vCuts.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p>Freelance</p>
                    </div>
                </span>
                <span className="container">
                    <h3>Summary</h3>
                        <p>{projectsInfo.vCuts.about}</p>
                </span>
                <div styleName="button-row" className="row">
                    <Button link="http://github.com/billxsheng/freelance-vcuts" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                </div>
            </div>
        )
    }
} 

export default CSSModules(VCuts, styles);