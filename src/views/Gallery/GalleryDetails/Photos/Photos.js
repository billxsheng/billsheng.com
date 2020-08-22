import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Photos.css';
import galleryInfo from '../../../../assets/gallery';
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
                    <div className="row">
                        <h1>
                            {galleryInfo.photos.title}
                        </h1>
                    </div>
                    <Fade bottom>
                    <p>
                        {galleryInfo.photos.description}
                    </p>
                    </Fade>
                </span>
                <div styleName="content">
                    <Fade bottom>
                    <Image width="700px" fine="Philadelphia, Pennsylvania" margin="0" path="gallery/photos/upenn.png" />
                    </Fade>
                    <br/>
                    <Fade bottom>
                    <Image width="700px" fine="Toronto, Canada" margin="0" path="gallery/photos/cne.jpg" />
                    </Fade>
                    <br/>
                    <Fade bottom>
                    <Image width="700px" fine="Metlife Stadium, NYC" margin="0" path="gallery/photos/metlife.jpg" />
                    </Fade>
                </div>
            </div>
        )
    }
} 

export default CSSModules(Photos, styles);