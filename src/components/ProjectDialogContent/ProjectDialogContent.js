import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProjectDialogContent.css';
import Aux from '../../hoc/HO-Aux/HO-aux';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Links from '../../assets/links';
import Image from '../Image/Image';


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
            <p className="text-center" styleName="title-p">{project.description}</p>
            <div className="row" styleName="tag" >
                <p className="text-center" styleName="title-p" >{project.tag}</p>
            </div>
            {/* <p className="text-center" styleName="title-p">{project.date}</p>  */}
            <hr/>
            <Image withRadius path = "projects/huddle/huddle-with-background.png" />
            <hr/>
            <h4>Technologies</h4>
            <p>{project.content.technologies}</p> 
            <h4>Summary</h4>
            <p>{project.content.summary}</p>
            <Image fine="Huddle Welcome Screen" path = "projects/huddle/huddle-splash.jpg" />     
            <h4>The Problem</h4>
            <p>{project.content.problem}</p> 
            <h4>Our Solution</h4>
            <p>{project.content.solution}</p>
            <Image fine="Huddle Promoted Venues" path = "projects/huddle/huddle-venues.jpg" />      
            <h4>Delivery</h4>
            <p>{project.content.delivery}</p> 
            <Image fine="Huddle Games" path = "projects/huddle/huddle-games.jpg" />      
            <br/>
            <br/>
            <br/>
            <div className="row"> 
              <Button link={"https://github.com/alanxie29/Huddle"} btnType = "btnLarge">Github</Button>     
            </div>
          </div>
        </Aux>
      );


      case "Blitz":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p className="text-center" styleName="title-p">{project.description}</p>
            <div className="row" styleName="tag" >
                <p className="text-center" styleName="title-p">{project.tag}</p>
            </div>
            <hr/>
            <Image withRadius path = "projects/blitz/blitz-with-background.png" />
            <hr/>
            <h4>Summary</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
               Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
               Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. D
               onec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Viv
                amus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat 
                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viver
                ra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies 
              nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
               tellus eget condimentum rhoncus, sem quam semper libero, sit amet a</p>
            <Image fine="Blitz Login" path = "projects/blitz/blitz-login.png" />
            <Image fine="Blitz Sign Up" path = "projects/blitz/blitz-signup.png" />
            <Image fine="Blitz Profile" path = "projects/blitz/blitz-profile.png" />

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
            <p className="text-center" styleName="title-p">{project.description}</p>
            <div className="row" styleName="tag" >
                <p className="text-center" styleName="title-p">{project.tag}</p>
            </div>
            <hr/>
            <Image path = "projects/munkee/munkee.png" />
            <hr/>
            <h4>Summary</h4>
            <p>{project.content.summary}</p>
            <Image fine="Munkee Game Screen" path = "projects/munkee/munkee-web.png" />
            <Image fine="Munkee Mobile Game Screen" path = "projects/munkee/munkee-mobile.png" />
            <br/>
            <br/>
            <br/>
            <div className="row">
              <Button link={Links.github + "/munkee"} btnType = "btnLarge">Github</Button>
            </div>
            <br/>
            <div className="row">
              <Button link={Links.munkee} btnType = "btnLarge">Play Now</Button>
            </div>
          </div>
        </Aux>
      );



      case "AirDrums":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p className="text-center" styleName="title-p">{project.description}</p>
            <div className="row" styleName="tag" >
                <p className="text-center" styleName="title-p">{project.tag}</p>
            </div>
            <hr/>
            <h4>Summary</h4>
            <p>{project.content.summary}</p>
            <br/>
            <br/>
            <br/>
            <div className="row">
              <Button link={"https://github.com/kvptkr/Air-Drums--UoftHacks-2019"} btnType = "btnLarge">Github</Button>
            </div>
          </div>
        </Aux>
      );


      case "Ryse":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p className="text-center" styleName="title-p">{project.description}</p>
            <div className="row" styleName="tag" >
                <p className="text-center" styleName="title-p">{project.tag}</p>
            </div>
            <hr/>
            <h4>Summary</h4>
            <p>{project.content.summary}</p>
            <br/>
            <br/>
            <br/>
            <div className="row">
              <Button link={Links.github + "/ryse"} btnType = "btnLarge">Github</Button>
            </div>
          </div>
        </Aux>
      );


      case "Moodify":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p className="text-center" styleName="title-p">{project.description}</p>
            <div className="row" styleName="tag" >
                <p className="text-center" styleName="title-p">{project.tag}</p>
            </div>
            <hr/>
            <h4>Summary</h4>
            <p>{project.content.summary}</p>
            <br/>
            <br/>
            <br/>
            <div className="row">
              <Button link={Links.github + "/moodify"} btnType = "btnLarge">Github</Button>
            </div>
          </div>
        </Aux>
      );


      case "OpenText":
      return (
        <Aux>
          <div styleName="modal" >
          < Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p className="text-center" styleName="title-p">{project.description}</p>
            <div className="row" styleName="tag" >
                <p className="text-center" styleName="title-p">{project.tag}</p>
            </div>
            <hr/>
            <h4>Summary</h4>
            <p>{project.content.summary}</p>
          </div>
        </Aux>
      );


      case "Freelance":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p className="text-center" styleName="title-p">{project.description}</p>
            <div className="row" styleName="tag" >
                <p className="text-center" styleName="title-p">{project.tag}</p>
            </div>
            <hr/>
            <h4>Summary</h4>
            <p>{project.content.summary}</p>
          </div>
        </Aux>
      );


      case "Canadian Tire":
      return (
        <Aux>
          <div styleName="modal" >
            <Icon iconName="fas fa-times" close={this.props.close} iconType="iconClose" />
            <h1>{project.name}</h1>
            <p className="text-center" styleName="title-p">{project.description}</p>
            <div className="row" styleName="tag" >
                <p className="text-center" styleName="title-p">{project.tag}</p>
            </div>
            <hr/>
            <h4>Summary</h4>
            <p>{project.content.summary}</p>
          </div>
        </Aux>
      );

      
      default:
      return null; 
    }
  }
} 


export default CSSModules(ProjectModal, styles, {allowMultiple: true});