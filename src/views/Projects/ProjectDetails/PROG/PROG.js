import React, {Component} from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import styles from '../projectDetail.css';
import CSSModules from 'react-css-modules';
import Button from '../../../../components/Button/Button';

class prog extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="container">
                <span className="container">
                    <div className="row">
                        <h1>
                            {projectsInfo.PROG.name}
                        </h1>
                    </div>
                    <p>
                        {projectsInfo.PROG.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p>Side Project</p>
                    </div>
                </span>
                <span className="container">
                    <h3>Technologies Used</h3>
                    <p>{projectsInfo.PROG.technologies}</p>
                </span>
                <span className="container">
                    <h3>Summary</h3>
                    <p>{projectsInfo.PROG.about}</p>
                </span>
                <div styleName="button-row" className="row">
                        <Button link="http://github.com/billxsheng/prog-pm-tool" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                </div>
            </div>
        )
    }
} 

export default CSSModules(prog, styles);