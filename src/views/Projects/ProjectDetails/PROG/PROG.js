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
                            {projectsInfo.prog.name}
                        </h1>
                    </div>
                    <p>
                        {projectsInfo.prog.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p>{projectsInfo.prog.tag}</p>
                    </div>
                </span>
                <span className="container">
                    <h3>Technologies Used</h3>
                    <p>{projectsInfo.prog.technologies}</p>
                </span>
                <span className="container">
                    <h3>Summary</h3>
                    <p>{projectsInfo.prog.about}</p>
                </span>
                <div styleName="button-row" className="row">
                        <Button link="http://github.com/billxsheng/prog-pm-tool" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                </div>
            </div>
        )
    }
} 

export default CSSModules(prog, styles);