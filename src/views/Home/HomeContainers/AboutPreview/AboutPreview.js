import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './AboutPreview.css';
import Button from '../../../../components/Button/Button';
import Carousel from '../../../../components/Carousel/Carousel';
import OwlCarousel from 'react-owl-carousel';
import '../../../../external/owl.carousel.css';
import '../../../../external/owl.theme.default.css';


const aboutPreview = (props) => {
    const carouselItems1 = ['🎓', '🧠', '👨🏻‍💻', '🏋🏻‍', '🥑 ', '🏈', '⚾️', '🥅', '🎢'];
    const carouselItems2 = ['🐶', '👔', '🏀', '🎣', '🎸', '🔧', '🌇', '📚', '🍁'];

    return (
    <div styleName='aboutPreview'>
        <OwlCarousel
        loop
        items={5}
        margin={10}
        nav = {false}
        autoplay
        dots = {false}
        autoplaySpeed = {100}
        autoplayTimeout = {2000}  
        >
            <Carousel carouselItems={carouselItems1} classes="owl-carousel owl-theme about-preview-bwd" />
        </OwlCarousel>

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

        <OwlCarousel
        loop
        items={5}
        margin={10}
        nav = {false}
        autoplay
        dots = {false}
        autoplaySpeed = {100}
        autoplayTimeout = {2000}  
        rtl = "true"
        >
            <Carousel carouselItems={carouselItems2} classes="owl-carousel owl-theme about-preview-fwd" />
        </OwlCarousel>
    </div>
    )
}

export default CSSModules(aboutPreview, styles);