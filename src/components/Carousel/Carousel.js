import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Carousel.css';

class Carousel extends Component {
    state = {
        carouselItems: this.props.carouselItems
    }

    render() {
        console.log(this.props)
        console.log(this.state.carouselItems)
        const carouselItemsArr = Object.keys(this.state.carouselItems).map((key) => {
            return [this.state.carouselItems[key]]
        });

        const carouselItems = carouselItemsArr.map((emoji, index) =>
            <div key={index} styleName="carousel-item" >{emoji}</div>
        )

        return (
            <div className={this.props.classes}>
                {carouselItems}
            </div>
        )
    }
 
} 

export default CSSModules(Carousel, styles);