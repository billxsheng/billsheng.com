import React, { Component } from 'react';
import styles from './Gallery.css';
import CSSModules from 'react-css-modules';
import GalleryTile from './GalleryTile/GalleryTile';
import GalleryTileDetail from './GalleryTileDetail/GalleryTileDetail';

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
                    <span className="container">
                        <p>
                            Photos, Ideas, & Thoughts
                        </p>
                    </span>
                </span>
                <div className="container">
                    <div styleName="gallery-tile-row" className="row">
                        <GalleryTile height="400px" col="4"><GalleryTileDetail left="20px" right="10px" title="Title" description="Description"></GalleryTileDetail></GalleryTile>
                        <GalleryTile height="400px" col="8"><GalleryTileDetail left="5px" right="10px" title="Title" description="Description"></GalleryTileDetail></GalleryTile>
                    </div>
                </div>
            </div>
        )
    }
};


export default CSSModules(Gallery, styles);