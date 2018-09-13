import React, { Component } from 'react';
import styles from './Gallery.css';
import CSSModules from 'react-css-modules';
import GalleryTile from './GalleryTile/GalleryTile';
import GalleryTileDetail from './GalleryTileDetail/GalleryTileDetail';
import GalleryInfo from '../../assets/gallery';

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
                            Storage for Photos, Ideas, and Thoughts
                        </p>
                    </span>
                </span>
                <div className="container">
                    <div styleName="gallery-tile-row" className="row">
                        <GalleryTile height="350px" col="12">
                            <GalleryTileDetail color="rgb(38, 0, 255, 0.8)" path="fbs.jpeg" left="20px" right="20px" date={GalleryInfo.saturdayNightLights.date} title={GalleryInfo.saturdayNightLights.title} description={GalleryInfo.saturdayNightLights.description}></GalleryTileDetail></GalleryTile>
                        <GalleryTile height="350px" col="4">
                            <GalleryTileDetail color='rgb(255, 166, 0, 0.85)' path="graphql.jpg" left="20px" right="10px" date={GalleryInfo.graphQL.date} title={GalleryInfo.graphQL.title} description={GalleryInfo.graphQL.description}></GalleryTileDetail></GalleryTile>
                        <GalleryTile height="350px" col="8">
                            <GalleryTileDetail color='rgb(10, 150, 52, 0.75)' path="coop1.jpg" left="10px" right="20px" date={GalleryInfo.firstInternship.date} title={GalleryInfo.firstInternship.title} description={GalleryInfo.firstInternship.description}></GalleryTileDetail></GalleryTile>
                    </div>
                </div>
            </div>
        )
    }
};


export default CSSModules(Gallery, styles);