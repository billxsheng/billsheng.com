import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Image.css';

class Image extends Component {
    render() {
        const imageStyle = {
           'borderRadius': '15px',
           'max-height': `${this.props.height}`,
           'display': 'block'
        }

        const boxStyle = {
            'margin-top': `${this.props.top}`,
            'margin-bottom': `${this.props.bottom}`
        }

        if(this.props.withRadius) {
            return (
                <div styleName="image-box" style={boxStyle} >
                    <img className="img-fluid" style={imageStyle} alt="bill" src={require(`../../assets/images/${this.props.path}`)} />
                    <p className="text-center" styleName="image-description" >{this.props.fine}</p>
                </div>
            )
        } else {
            return (
                <div styleName="image-box" style={boxStyle}>
                    <img className="img-fluid" style={imageStyle} alt="bill" src={require(`../../assets/images/${this.props.path}`)} />
                    <p className="text-center" styleName="image-description" >{this.props.fine}</p>
                </div>
            )
        }
    }
} 

export default CSSModules(Image, styles);