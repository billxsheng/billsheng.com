import React, { Component } from 'react';
import styles from './Gallery.css';
import CSSModules from 'react-css-modules';

class Gallery extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div styleName="gallery" className="container">
                <span className="container">
                    <div className="row">
                        <h1>
                            Gallery
                        </h1>
                    </div>
                </span>
            </div>
        )
    }
};


export default CSSModules(Gallery, styles);