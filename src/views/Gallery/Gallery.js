import React, { Component } from 'react';
import styles from './Gallery.css';
import CSSModules from 'react-css-modules';
import GalleryTile from './GalleryTile/GalleryTile';
import GalleryTileDetail from './GalleryTileDetail/GalleryTileDetail';
import gallery from '../../assets/gallery';
import Fade from 'react-reveal/Fade';

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
                            {gallery.headings.gallery.title}
                        </h1>
                    </div>
                    <p>
                        {gallery.headings.gallery.description}
                    </p>
                </span>
                <div className="container">
                    <div styleName="gallery-tile-row" className="row">
                        <GalleryTile height="350px" col="8">
                            <GalleryTileDetail isFirst to="/gallery/photos" article="dc" left="5px" right="5px" title={gallery.photos.title} description={gallery.photos.description}></GalleryTileDetail>
                        </GalleryTile>
                        <GalleryTile height="350px" col="4">
                            <GalleryTileDetail isFirst to="/gallery/saturday-night-lights" article="snl" left="5px" right="5px" description={gallery.snl.description} title={gallery.snl.title}></GalleryTileDetail>
                        </GalleryTile>
                        <GalleryTile height="350px" col="4">
                            <GalleryTileDetail to="/gallery/graphql" article="graphql" left="5px" right="5px" description={gallery.graphql.description} title={gallery.graphql.title}></GalleryTileDetail>
                        </GalleryTile>
                        <GalleryTile height="350px" col="8">
                            <GalleryTileDetail to="/gallery/waterloo-engineering"  article="wateng" left="5px" right="5px" description={gallery.year1.description} title={gallery.year1.title}></GalleryTileDetail>
                        </GalleryTile>
                    </div>
                </div>
            </div>
        )
    }
};


export default CSSModules(Gallery, styles);