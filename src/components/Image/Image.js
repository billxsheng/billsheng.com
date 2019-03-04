import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Image.css';

class Image extends Component {
    render() {
        const imageStyle = {
            'marginTop': this.props.marginTop,
            'marginBottom': this.props.marginBottom,
           'marginLeft': `auto`,
           'marginRight': `auto`,
           'width': 'auto',
           'maxHeight': this.props.height,
           'display': 'block',
           'verticalAlign': 'middle',
           'position': 'relative',
           'borderRadius': '15px'
        }

        return (
            <img className="img-fluid" alt="bill" style={imageStyle} src={require(`../../assets/images/${this.props.path}`)} />
        )
    }
} 

export default CSSModules(Image, styles);