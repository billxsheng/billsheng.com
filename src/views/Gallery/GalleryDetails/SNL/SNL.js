import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './SNL.css';
import galleryInfo from '../../../../assets/galleryInfo';

class SNL extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div>
                <span className="container">
                    <div className="row">
                        <h1>
                            {galleryInfo.snl.title}
                        </h1>
                    </div>
                    <span className="container">
                        <p>
                            {galleryInfo.snl.date}
                        </p>
                    </span>
                    <div styleName="content">
                    </div>
                </span>
            </div>
        )
    }
} 

export default CSSModules(SNL, styles);