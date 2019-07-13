import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Photos.css';
import galleryInfo from '../../../../assets/galleryInfo';
import Image from '../../../../components/Image/Image';
import Fade from 'react-reveal/Fade';

class Photos extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="container">
                <span className="container">
                <Fade bottom>
                    <div className="row">
                        <h1>
                            {galleryInfo.photos.title}
                        </h1>
                    </div>
                    <p>
                        {galleryInfo.photos.description}
                    </p>
                    </Fade>
                </span>
                <div styleName="content">
                    <Fade bottom>
                    <Image width="700px" fine="Ultimate Intramural Champions" margin="0" path="gallery/photos/team-picture.jpeg" />
                    </Fade>
                    <br/>
                    <Fade bottom>
                    <Image width="700px" fine="University of Pennsylvania" margin="0" path="gallery/photos/upenn.png" />
                    </Fade>
                    <br/>
                    <Fade bottom>
                    <Image width="700px" fine="Florence, Italy" margin="0" path="gallery/photos/secondary.jpeg" />
                    </Fade>
                </div>
            </div>
        )
    }
} 

export default CSSModules(Photos, styles);