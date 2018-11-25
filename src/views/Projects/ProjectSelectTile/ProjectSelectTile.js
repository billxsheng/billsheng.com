import React, { Component } from 'react';
import styles from './ProjectSelectTile.css';
import CSSModules from 'react-css-modules';

class projectSelect extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        const selectBoxStyle = `select-box-${this.props.name}`;
        
        return(
            <div styleName={selectBoxStyle}>
                <h4>{this.props.type}</h4>
                {this.props.children}
            </div>
        )
    }
};



export default CSSModules(projectSelect, styles);