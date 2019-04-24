import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Image.css';

class Image extends Component {
    render() {
        const imageStyle = {
           'borderRadius': '15px',
           'height': `${this.props.height}`,
           'margin': '0 auto',
           'display': 'block'
        }
        if(this.props.withRadius) {
            return (
                <div styleName="image-box">
                    <img className="img-fluid" style={imageStyle} alt="bill" src={require(`../../assets/images/${this.props.path}`)} />
                    <p className="text-center" styleName="image-description" >{this.props.fine}</p>
                </div>
            )
        } else {
            return (
                <div styleName="image-box">
                    <img className="img-fluid" alt="bill" src={require(`../../assets/images/${this.props.path}`)} />
                    <p className="text-center" styleName="image-description" >{this.props.fine}</p>
                </div>
            )
        }
    }
} 

export default CSSModules(Image, styles);