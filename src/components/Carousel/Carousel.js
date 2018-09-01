import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Carousel.css';
import Aux from '../../hoc/HO-Aux/HO-aux';

class Carousel extends Component {
    state = {
        carouselItems: this.props.carouselItems
    }

    render() {
        const carouselItemsArr = Object.keys(this.state.carouselItems).map((key) => {
            return [this.state.carouselItems[key]]
        });

        const carouselItems = carouselItemsArr.map((emoji, index) =>
            <div key={index} styleName="carousel-item" >{emoji}</div>
        )

        return (
            <Aux>
                {carouselItems}
            </Aux>
        )
    }
 
} 

export default CSSModules(Carousel, styles);