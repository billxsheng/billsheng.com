import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './DialogContent.css';
// import MainButtonNav from '../Button/MainButtonRow/MainButtonRow';

class modal extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <div styleName="modal">
        <h1>Contact</h1>
      </div>
      
    )
  }
} 


export default CSSModules(modal, styles);