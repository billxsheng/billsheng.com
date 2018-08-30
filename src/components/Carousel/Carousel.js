import React, { Component } from 'react';

class Carousel extends Component {
    state = {
        carouselItems: this.props.carouselItems,
        yeet: [1,2,3]
    }

    
   

    render() {
        const carouselItemsArr = Object.keys(this.state.carouselItems).map((key) => {
            return [this.state.carouselItems[key]]
        });

        console.log(carouselItemsArr)
        const carouselItems = carouselItemsArr.map((emoji, index) =>
            <div styleName="carousel-item" >{emoji}</div>
        )
        return (
            <div className={this.props.classes}>
                {carouselItems}
            </div>
        )
    }
 
} 

export default Carousel;