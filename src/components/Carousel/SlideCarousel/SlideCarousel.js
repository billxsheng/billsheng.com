import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './SlideCarousel.css'
import OwlCarousel from 'react-owl-carousel2';
import Icon from '../../Icon/Icon';


class SlideCarousel extends Component {

    render() {
        const options = {
            items: 1,
            dots: true,
            rtl: false,
            mouseDrag: false,
            loop: false
        }
    
        const carouselStyle = {
            'width': 'inherit',
            'margin': '0 auto',
            'backgroundColor': 'transparent',
            'borderRadius': '40px',
            'position':'relative',
            'boxShadow': '0 0 40px #ccc'
        }

        return (
            <div styleName="carousel-wrapper-btn"  >
            <OwlCarousel style={carouselStyle} ref="projCarousel" options={options}>   
                {this.props.children}
            </OwlCarousel>
            <a styleName="btn-left" onClick={() => this.refs.projCarousel.prev()}><Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon></a>
            <a styleName="btn-right" onClick={() => this.refs.projCarousel.next()}><Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon></a>
            </div>
        )
    }

}

export default CSSModules(SlideCarousel, styles);