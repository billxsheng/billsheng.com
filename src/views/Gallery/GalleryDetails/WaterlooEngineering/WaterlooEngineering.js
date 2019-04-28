import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './WaterlooEngineering.css';
import galleryInfo from '../../../../assets/galleryInfo';

class wateng extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="container">
                <span className="container">
                    <div className="row">
                        <h1>
                            {galleryInfo.year1.title}
                        </h1>
                    </div>
                        <p>
                            {galleryInfo.year1.date}
                        </p>
                </span>
                <div styleName="content">
                </div>
            </div>
        )
    }
} 

export default CSSModules(wateng, styles);