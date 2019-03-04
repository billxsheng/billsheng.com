import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './AboutPreview.css';
import Carousel from '../../../../components/Carousel/EmojiCarousel/EmojiCarousel';
import OwlCarousel from 'react-owl-carousel2';
import Link from '../../../../components/Button/Link/Link';
import homeInfo from '../../../../assets/homeInfo';


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
                <h2>{homeInfo.myStory.title}</h2>
                <span className="container">
                    <p>{homeInfo.myStory.description}</p>            
                </span>  
                </div>
            </div>
        <OwlCarousel
        options={options}
        >   
            <Carousel carouselItems={carouselItems} classes="owl-carousel owl-theme" />
        </OwlCarousel>
        <div className="container">
                <div styleName="abt-prev-el" className="row">
                    <Link margin="25px" link="/my-story">My Story</Link>
                </div>
            </div>
    </div>
    )
}

export default CSSModules(aboutPreview, styles);