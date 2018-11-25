import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './DialogContent.css';
import MainButtonNav from '../Button/MainButtonRow/MainButtonRow';
import contactInfo from '../../assets/contactInfo';

class modal extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <div styleName="modal">
        <h1>{contactInfo.title}</h1>
        <MainButtonNav/>
        <p styleName="contact-p" >
          {contactInfo.search}
        </p>
        <div className="row" styleName="btn-close"> 
          {this.props.children}
        </div>
      </div>
    )
  }
} 


export default CSSModules(modal, styles);