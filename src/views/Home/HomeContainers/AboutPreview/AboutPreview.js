import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './AboutPreview.css';
import Button from '../../../../components/Button/Button';
import Carousel from '../../../../components/Carousel/Carousel';
import OwlCarousel from 'react-owl-carousel2';
import '../../../../external/owl.carousel.css';
import '../../../../external/owl.theme.default.css';


const aboutPreview = (props) => {
    const carouselItems1 = ['🎓', '🧠', '👨🏻‍💻', '🏋🏻‍', '🥑 ', '🏈', '⚾️', '🥅', '🎢'];
    const carouselItems2 = ['🐶', '👔', '🏀', '🎣', '🎸', '🔧', '🌇', '📚', '🍁'];
    const options = {
        items: 5,
        nav: false,
        autoplay: true,
        loop: true,
        dots: false,
        autoplayTimeout: 2000,
        rtl: true
    }

    const optionsReverse = {
        items: 5,
        nav: false,
        autoplay: true,
        loop: true,
        dots: false,
        autoplayTimeout: 2000,
        rtl: false
    }
    return (
    <div styleName='aboutPreview'>
        <OwlCarousel
        options={optionsReverse}
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
        options={options}
        >   
            <Carousel carouselItems={carouselItems2} classes="owl-carousel owl-theme" />
        </OwlCarousel>
    </div>
    )
}

export default CSSModules(aboutPreview, styles);