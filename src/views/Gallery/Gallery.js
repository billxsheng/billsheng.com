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
                            Photos, Ideas, and Thoughts
                        </p>
                    </span>
                </span>
                <div className="container">
                    <div styleName="gallery-tile-row" className="row">
                        <GalleryTile height="350px" col="12"><GalleryTileDetail left="20px" right="20px" date="September 5, 2018" title="The Rise of the FBS " description="The NFL's successor"></GalleryTileDetail></GalleryTile>
                        <GalleryTile height="350px" col="4"><GalleryTileDetail left="20px" right="10px" date="September 5, 2018" title="Coop #1" description="Thoughts and Reflections"></GalleryTileDetail></GalleryTile>
                        <GalleryTile height="350px" col="8"><GalleryTileDetail left="10px" right="20px" date="September 5, 2018" title="GraphQL" description="Seamless API manipulation"></GalleryTileDetail></GalleryTile>
                    </div>
                </div>
            </div>
        )
    }
};


export default CSSModules(Gallery, styles);