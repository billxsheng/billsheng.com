import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProjectDialogContent.css';
import Aux from '../../hoc/HO-Aux/HO-aux';


class ProjectModal extends Component {
  state = {
    isOpen: false
  }

  render() {
    let project = this.props.project;
    return (
      <Aux>
        <div styleName="modal">
          <h1>{project.name}</h1>
        </div>
      </Aux>
    )
  }
} 


export default CSSModules(ProjectModal, styles);