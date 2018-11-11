import React, {Component} from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import styles from '../projectDetail.css';
import CSSModules from 'react-css-modules';
import Button from '../../../../components/Button/Button';


class Munkee extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="container">
                <span className="container">
                    <div className="row">
                        <h1>
                            {projectsInfo.Munkee.name}
                        </h1>
                    </div>
                    <p>
                        {projectsInfo.Munkee.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p>Side Project</p>
                    </div>
                </span>
                <span className="container">
                    <h3>Technologies Used</h3>
                    <p>{projectsInfo.Munkee.technologies}</p>
                </span>
                <span className="container">
                    <h3>Summary</h3>
                    <p>{projectsInfo.Munkee.about}</p>
                </span>
                <div styleName="button-row" className="row">
                        <Button link="http://github.com/billxsheng/munkee" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                        <Button link="http://munkee.herokuapp.com" newPage = 'true' btnType="btnLarge" >Play Munkee</Button>
                </div>
            </div>
        )
    }
} 

export default CSSModules(Munkee, styles);