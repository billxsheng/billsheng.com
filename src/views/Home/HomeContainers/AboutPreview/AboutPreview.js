import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './AboutPreview.css';
import Carousel from '../../../../components/Carousel/EmojiCarousel/EmojiCarousel';
import OwlCarousel from 'react-owl-carousel2';
import Button from '../../../../components/Button/Button';
import home from '../../../../assets/home';
import Fade from 'react-reveal/Fade';

const aboutPreview = (props) => {
    const carouselItems = ['🐶', '👔', '🏀', '🎣', '🎸', '🔧', '🌇', '📚', '🍁','🎓', '🧠', '👨🏻‍💻', '🏋🏻‍', '🥑 ', '🏈', '⚾️', '🥅', '🎢'];
    const options = {
        items: 5,
        nav: false,
        autoplay: true,
        loop: true,
        dots: false,
        touchDrag: false,
        autoplayTimeout: 1500,
        rtl: false,
        mouseDrag: false,
        responsive: {
            705: {
                items: 5
            },
            0: {
                items: 3
            }
        },
        lazyLoad: true

    }
    return (
    <div styleName='aboutPreview'>
            <div className="container">
                <div styleName="abt-prev-el" className="row">
                <h2>{home.myStory.title}</h2>
                <Fade bottom>
                <span className="container">
                    <p>{home.myStory.description}</p>            
                </span>  
                </Fade>
                </div>
            </div>
        <Fade bottom>
        <OwlCarousel
        options={options}
        >   
            <Carousel carouselItems={carouselItems} classes="owl-carousel owl-theme" />
        </OwlCarousel>
        </Fade>
        <div className="container">
            <div styleName="abt-prev-el" className="row">
                <Button margin="30px auto" to="/my-story">My Story</Button>
            </div>
        </div>
    </div>
    )
}

export default CSSModules(aboutPreview, styles);