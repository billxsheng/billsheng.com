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
            <div className="container">
                <span className="container">
                    <div className="row">
                        <h1>
                            {projectsInfo.Blitz.name}
                        </h1>
                    </div>
                    <p>
                        {projectsInfo.Blitz.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p>Project</p>
                    </div>
                </span>
                <span styleName="technologies" className="container">
                    <h3>Technologies</h3>
                    <p>JavaScript (Node.js, Express.js) <br/> MongoDB  <br/> HTML  <br/> CSS  <br/> Bootstrap</p>
                </span>
                <div styleName="button-row" className="row">
                    <Button link="http://github.com/billxsheng/blitz" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                </div>
            </div>
        )
    }
} 

export default CSSModules(Blitz, styles);