import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './GalleryTile.css'
import classNames from 'classnames';

class GalleryTile extends Component {
    state = {
        height: this.props.height,
        width: 'col-md-' + this.props.col
    }


    render() {

        const tileStyle = {
            height: this.state.height,
            border: '1px solid transparent',
            position: 'relative',
        }

        const tileClass = classNames(
            this.state.width
        )

        return (
            <div styleName="tile-div" style={tileStyle} className={tileClass} >
                {this.props.children}
            </div>
        )
    }
} 

export default CSSModules(GalleryTile, styles);