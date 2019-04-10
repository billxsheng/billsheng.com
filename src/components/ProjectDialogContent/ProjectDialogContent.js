import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProjectDialogContent.css';
import Aux from '../../hoc/HO-Aux/HO-aux';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Links from '../../assets/links';


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
            <hr/>
            <h4>Summary</h4>
            <p2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
               Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
               Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. D
               onec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Viv
                amus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat 
                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viver
                ra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies 
              nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
               tellus eget condimentum rhoncus, sem quam semper libero, sit amet a</p2>     
            <br/>
            <br/>
            <br/>
            <Button link={"https://github.com/alanxie29/Huddle"} btnType = "btnLarge">Github</Button>     
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
            <hr/>
            <h4>Summary</h4>
            <p2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
               Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
               Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. D
               onec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Viv
                amus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat 
                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viver
                ra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies 
              nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
               tellus eget condimentum rhoncus, sem quam semper libero, sit amet a</p2>
            <br/>
            <br/>
            <br/>
            <div className="row">
              <Button link={Links.github + "/blitz"} btnType = "btnLarge">Github</Button>
            </div>
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
            <hr/>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
            <br/>
            <br/>
            <br/>
            <Button link={Links.github + "/munkee"} btnType = "btnLarge">Github</Button>
            &nbsp; &nbsp;
            <Button link={Links.munkee} btnType = "btnLarge">Play Now</Button>
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
            <hr/>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
            <br/>
            <br/>
            <br/>
            <Button link={Links.github + "/freelance-vcuts"} btnType = "btnLarge">Github</Button>
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
            <hr/>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
            <br/>
            <br/>
            <br/>
            <Button link={"https://github.com/kvptkr/Air-Drums--UoftHacks-2019"} btnType = "btnLarge">Github</Button>
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
            <hr/>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
            <br/>
            <br/>
            <br/>
            <Button link={Links.github + "/ryse"} btnType = "btnLarge">Github</Button>
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
            <hr/>
            <h4>Summary</h4>
            <p2>{project.content.summary}</p2>
            <br/>
            <br/>
            <br/>
            <Button link={Links.github + "/moodify"} btnType = "btnLarge">Github</Button>
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
            <hr/>
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
            <hr/>
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
            <hr/>
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