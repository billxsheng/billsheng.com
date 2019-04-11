import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Image.css';

class Image extends Component {
    render() {
        const imageStyle = {
           'borderRadius': '15px',
        }

        return (
            <div styleName="image-box">
                <img className="img-fluid" alt="bill" style={imageStyle} src={require(`../../assets/images/${this.props.path}`)} />
                <p className="text-center" styleName="image-description" >{this.props.fine}</p>
            </div>
        )
    }
} 

export default CSSModules(Image, styles);