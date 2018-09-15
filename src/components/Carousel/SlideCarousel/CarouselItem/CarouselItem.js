import React from 'react';
import CSSModules from 'react-css-modules';
import {NavLink} from 'react-router-dom';
import styles from './CarouselItem.css';

const carouselItem = (props) => {

        const projectName = `upper-wrapper-${props.type}`

        
        return (
            <NavLink styleName="carousel-wrapper item-preview-tile" to={props.to} className='btn'>
                <div styleName={projectName}>
                </div>
                <div styleName="lower-wrapper" className="row">
                    <div styleName="text-div">
                        <h3>{props.title}</h3>
                        <p>{props.date}</p>
                        {props.tag ? <div styleName="tag">
                            <p>{props.tag}</p>
                        </div> : null}
                    </div>
                </div>
            </NavLink>
        )
}
    


export default CSSModules(carouselItem, styles, {allowMultiple: true});