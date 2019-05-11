import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Photos.css';
import galleryInfo from '../../../../assets/galleryInfo';
import Image from '../../../../components/Image/Image';

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
                    <Image width="700px" fine="Ultimate Intramural Champions" margin="0" path="gallery/photos/team-picture.jpeg" />
                    <br/>
                    <Image width="700px" fine="University of Pennsylvania" margin="0" path="gallery/photos/upenn.png" />
                    <br/>
                    <Image width="700px" fine="Venice, Italy" margin="0" path="gallery/photos/italy.png" />
                    <br/>
                    <Image width="700px" fine="Rocky Steps, Philadelphia" margin="0" path="gallery/photos/eagles.png" />
                    <br/>
                    <Image width="700px" fine="Boston @ Toronto Game 6 2019" margin="0" path="gallery/photos/jurassic-park.png" />
                </div>
            </div>
        )
    }
} 

export default CSSModules(Photos, styles);