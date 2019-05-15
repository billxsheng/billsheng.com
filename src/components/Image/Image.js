import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Image.css';

class Image extends Component {
    render() {
        const imageStyle = {
           'borderRadius': '15px',
           'maxHeight': `${this.props.height}`,
           'width': `${this.props.width}`,
           'height': 'auto',
           'display': 'block',
           'float': `${this.props.float}`
        }

        const imageStyleNR = {
            'maxHeight': `${this.props.height}`,
            'width': `${this.props.width}`,
            'height': 'auto',
            'display': 'block',
            'float': `${this.props.float}`

        }

        const boxStyle = {
            'margin': `${this.props.margin}`,
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
                    <img className="img-fluid" style={imageStyleNR} alt="bill" src={require(`../../assets/images/${this.props.path}`)} />
                    <p className="text-center" styleName="image-description" >{this.props.fine}</p>
                </div>
            )
        }
    }
} 

export default CSSModules(Image, styles);