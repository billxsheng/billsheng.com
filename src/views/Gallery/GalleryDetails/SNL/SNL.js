import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './SNL.css';
import galleryInfo from '../../../../assets/gallery';
import Fade from 'react-reveal/Fade';

class SNL extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="container">
                <span className="container">
                    <div className="row">
                        <h1>
                            {galleryInfo.snl.title}
                        </h1>
                    </div>
                    <Fade bottom>
                    <p>
                        {galleryInfo.snl.description}
                    </p>
                    </Fade>
                </span>
                <div styleName="content">
                </div>
            </div>
        )
    }
} 

export default CSSModules(SNL, styles);