import React, { Component } from 'react';

class Carousel extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        carouselItems: null
    }


    updateItemsHandler = () => {
        this.setState({carouselItems: this.props.carouselItems});
    }


    render() {

        this.updateItemsHandler();

        console.log(this.state.carouselItems)
        const carouselItems = this.state.carouselItems.map((emoji) =>
            <div styleName="carousel-item" >{emoji}</div>
        )
        return (
            <div className={this.props.classes}>
                {{carouselItems}}
            </div>
        )
    }
 
} 

export default Carousel;