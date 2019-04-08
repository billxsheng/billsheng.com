import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProjectDialogContent.css';

class ProjectModal extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <div styleName="modal">
        <h1>{this.props.project}</h1>
      </div>
    )
  }
} 


export default CSSModules(ProjectModal, styles);