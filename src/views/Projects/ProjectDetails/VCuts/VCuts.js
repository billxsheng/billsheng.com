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
            <div>
                <span className="container">
                        <h1>
                            {projectsInfo.vCuts.name}
                        </h1>
                        <div className="row" styleName="tag" >
                            <p>Freelance</p>
                        </div>
                        <p>
                            {projectsInfo.vCuts.description}
                        </p>
                    <span className="container">
                        <h3>Technologies Used</h3>
                            <p>{projectsInfo.vCuts.technologies}</p>
                    </span>
                    <span className="container">
                        <h3>Summary</h3>
                            <p>{projectsInfo.vCuts.about}</p>
                    </span>
                    <div styleName="button-row" className="row">
                        <Button link="http://github.com/billxsheng/freelance-vcuts" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                    </div>
                </span>
            </div>
        )
    }
} 

export default CSSModules(VCuts, styles);