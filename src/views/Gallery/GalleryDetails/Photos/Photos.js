import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Photos.css';
import galleryInfo from '../../../../assets/galleryInfo';

class Photos extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="container">
                <span className="container">
                    <div className="row">
                        <h1>
                            {galleryInfo.photos.title}
                        </h1>
                    </div>
                        <p>
                            {galleryInfo.photos.description}
                        </p>
                </span>
                <div styleName="content">
                </div>
            </div>
        )
    }
} 

export default CSSModules(Photos, styles);