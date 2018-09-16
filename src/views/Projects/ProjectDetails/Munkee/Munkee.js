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
            <div>
                    <span className="container">
                        <div className="row">
                            <h1>
                                {projectsInfo.Munkee.name}
                            </h1>
                        </div>
                        <span styleName="description" className="container">
                            <p>
                                {projectsInfo.Munkee.description}
                            </p>
                        </span>
                        <span>
                            <div styleName="button-row" className="row">
                                <Button link="http://github.com/billxsheng/munkee" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                                <Button link="http://munkee.herokuapp.com" newPage = 'true' btnType="btnLarge" >Play Munkee</Button>
                            </div>
                        </span>
                        <span className="container">
                            <h3>Technologies Used</h3>
                            <div styleName="technologies" className="row">
                                <p>{projectsInfo.Munkee.technologies}</p>
                            </div>
                        </span>
                        <span className="container">
                            <h3>About this Project</h3>
                            <div className="row">
                                <p>{projectsInfo.Munkee.about}</p>
                            </div>
                        </span>
                    </span>
                </div>
        )
    }
} 

export default CSSModules(Munkee, styles);