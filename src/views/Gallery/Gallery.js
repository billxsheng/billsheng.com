import React, { Component } from 'react';
import styles from './Gallery.css';
import CSSModules from 'react-css-modules';
import GalleryTile from './GalleryTile/GalleryTile';
import GalleryTileDetail from './GalleryTileDetail/GalleryTileDetail';
import GalleryInfo from '../../assets/galleryInfo';

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
                            {GalleryInfo.headings.gallery.title}
                        </h1>
                    </div>
                    <p>
                        {GalleryInfo.headings.gallery.description}
                    </p>
                </span>
                <div className="container">
                    <div styleName="gallery-tile-row" className="row">
                        <GalleryTile height="350px" col="8">
                            <GalleryTileDetail isFirst to="/gallery/photos" article="photos" left="5px" right="5px" title={GalleryInfo.photos.title} description={GalleryInfo.photos.description}></GalleryTileDetail>
                        </GalleryTile>
                        <GalleryTile height="350px" col="4">
                            <GalleryTileDetail isFirst to="/gallery/saturday-night-lights" article="snl" left="5px" right="5px" description={GalleryInfo.snl.description} title={GalleryInfo.snl.title}></GalleryTileDetail>
                        </GalleryTile>
                        <GalleryTile height="350px" col="4">
                            <GalleryTileDetail to="/gallery/graphql" article="graphql" left="5px" right="5px" description={GalleryInfo.graphql.description} title={GalleryInfo.graphql.title}></GalleryTileDetail>
                        </GalleryTile>
                        <GalleryTile height="350px" col="8">
                            <GalleryTileDetail to="/gallery/waterloo-engineering"  article="wateng" left="5px" right="5px" description={GalleryInfo.year1.description} title={GalleryInfo.year1.title}></GalleryTileDetail>
                        </GalleryTile>
                    </div>
                </div>
            </div>
        )
    }
};


export default CSSModules(Gallery, styles);