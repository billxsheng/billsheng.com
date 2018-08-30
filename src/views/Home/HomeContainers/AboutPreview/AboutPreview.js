import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './AboutPreview.css';
import Button from '../../../../components/Button/Button';
import Carousel from '../../../../components/Carousel/Carousel';


const aboutPreview = (props) => {
    const carouselItems1 = ['🎓', '🧠', '👨🏻‍💻', '🏋🏻‍', '🥑 ', '🏈', '⚾️', '🥅', '🎢'];
    const carouselItems2 = ['🐶', '👔', '🏀', '🎣', '🎸', '🔧', '🌇', '📚', '🍁'];

    return (
    <div styleName='aboutPreview'>
        <Carousel carouselItems={carouselItems1} classes="owl-carousel owl-theme about-preview-bwd" />
        <div className="container">
            <div styleName="abt-prev-el" className="row">
               <h2>something cool</h2>
            </div>
        </div>
        <div className="container">
            <div styleName="abt-prev-el" className="row">
                <Button btnType="btnSmall">About Me</Button>
            </div>
        </div>
       
        <Carousel carouselItems={carouselItems2} classes="owl-carousel owl-theme about-preview-fwd" />
    </div>
    )
}

export default CSSModules(aboutPreview, styles);