import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './AboutPreview.css';
import Button from '../../../../components/Button/Button';
import Carousel from '../../../../components/Carousel/Carousel';


const aboutPreview = (props) => {
    const carouselItems1 = ['🎓', '🧠<', '👨🏻‍💻', '🏋🏻‍♂️', '🥑 ', '🏈<', '⚾️', '🥅'];
    const carouselItems2 = ['🐶', '👔', '🏀', '🎣', '🎸', '🗺', '🏟', '📚<'];

    return (
    <div styleName='aboutPreview'>
        <span className="container">
            <h1>About</h1>
            {/* <Button btnType="btnSmall">About Me</Button> */}
        </span>
        <Carousel carouselItems={{carouselItems1}} classes="owl-carousel owl-theme about-preview-bwd" />

        <div className="owl-carousel owl-theme about-preview-bwd">
            <div styleName="carousel-item" >🎓</div>
            <div styleName="carousel-item" >🧠</div>
            <div styleName="carousel-item" >👨🏻‍💻 </div>
            <div styleName="carousel-item" >🏋🏻‍♂️</div>
            <div styleName="carousel-item" >🥑 </div>
            <div styleName="carousel-item" >🏈</div>
            <div styleName="carousel-item" >⚾️</div>
            <div styleName="carousel-item" >🥅</div>
        </div>

        <div className="owl-carousel owl-theme about-preview-fwd">
            <div styleName="carousel-item" >🐶</div>
            <div styleName="carousel-item" >👔</div>
            <div styleName="carousel-item" >🏀 </div>
            <div styleName="carousel-item" >🎣</div>
            <div styleName="carousel-item" >🎸 </div>
            <div styleName="carousel-item" >🗺</div>
            <div styleName="carousel-item" >🏟</div>
            <div styleName="carousel-item" >📚</div>
        </div>
    </div>
    )
}

export default CSSModules(aboutPreview, styles);