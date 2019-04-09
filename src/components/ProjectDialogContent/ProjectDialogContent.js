import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProjectDialogContent.css';
import Aux from '../../hoc/HO-Aux/HO-aux';
import Icon from '../Icon/Icon';


class ProjectModal extends Component {
  render() {
    let project = this.props.project;

    switch(project.name) {


      case "Huddle":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="row" styleName="tag" >
                <p>{project.tag}</p>
            </div>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>          
            </div>
        </Aux>
      );


      case "Blitz":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="row" styleName="tag" >
                <p>{project.tag}</p>
            </div>
            <img src={require('../../assets/images/projects/blitz.png')} alt="Blitz" />
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
          </div>
        </Aux>
      );


      case "Munkee":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="row" styleName="tag" >
                <p>{project.tag}</p>
            </div>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
          </div>
        </Aux>
      );


      case "VCuts":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="row" styleName="tag" >
                <p>{project.tag}</p>
            </div>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
          </div>
        </Aux>
      );


      case "AirDrums":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="row" styleName="tag" >
                <p>{project.tag}</p>
            </div>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
          </div>
        </Aux>
      );


      case "Ryse":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="row" styleName="tag" >
                <p>{project.tag}</p>
            </div>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
          </div>
        </Aux>
      );


      case "Moodify":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="row" styleName="tag" >
                <p>{project.tag}</p>
            </div>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
          </div>
        </Aux>
      );


      case "OpenText":
      return (
        <Aux>
          <div styleName="modal" >
          < Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="row" styleName="tag" >
                <p>{project.tag}</p>
            </div>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
          </div>
        </Aux>
      );


      case "Freelance":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="row" styleName="tag" >
                <p>{project.tag}</p>
            </div>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
          </div>
        </Aux>
      );


      case "Canadian Tire":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="row" styleName="tag" >
                <p>{project.tag}</p>
            </div>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
          </div>
        </Aux>
      );

      
      default:
      return null; 
    }
  }
} 


export default CSSModules(ProjectModal, styles);