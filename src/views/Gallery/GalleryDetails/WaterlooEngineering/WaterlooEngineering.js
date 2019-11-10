import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './WaterlooEngineering.css';
import galleryInfo from '../../../../assets/gallery';
import Fade from 'react-reveal/Fade';

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
                    <Fade bottom>
                    <p>
                        {galleryInfo.year1.description}
                    </p>
                    </Fade>
                </span>
                <div styleName="content">
                </div>
            </div>
        )
    }
} 

export default CSSModules(wateng, styles);