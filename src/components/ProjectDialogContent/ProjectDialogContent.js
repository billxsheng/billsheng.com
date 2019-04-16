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
            <h4>Summary</h4>
            <p>{project.content.summary}</p>
            <h4>Technology</h4>
            <p>{project.content.technology}</p>
            <h4>My Tasks</h4>
            <ul className="list-group">
              <li><p3>Created authentication templates using React-Native</p3></li>
              <li><p3>Called HTTP requests using React Axios library</p3></li>
              <li><p3>Configured login/signup form logic using two-way binding, lifecycle hooks, and component states</p3></li>
              <li><p3>Implemented MVC design patterns using Java Spring framework</p3></li>
              <li><p3>Implemented session-based stateful authentication using Spring Security </p3></li>
              <li><p3>Wrote User and Game entities to be saved into MySQL database</p3></li>
              <li><p3>Constructed REST API endpoints within Spring controllers to configure data flow between client and server</p3></li>
              <li><p3>Called external MySportsFeeds API to continuously update database on game states</p3></li>
            </ul>
            <h4>The Problem</h4>
            <p>{project.content.problem}</p> 
            <h4>Our Solution</h4>
            <p>{project.content.solution}</p>
            <Image fine="Huddle Welcome Screen" path = "projects/huddle/huddle-splash.jpg" />     
            <Image fine="Huddle Promoted Venues" path = "projects/huddle/huddle-venues.jpg" />      
            <Image fine="Huddle Games" path = "projects/huddle/huddle-games.jpg" />      
            <br/>
            <br/>
            <br/>
            <div className="row"> 
              <Button margin="0px auto" link={"https://github.com/alanxie29/Huddle"} btnType = "btnLarge">Github</Button>     
            </div>
          </div>
        </Aux>
      );


      case "Blitz":
      var htmlObject = document.createElement('div');
      htmlObject.innerHTML = project.content.tasks;

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
            <p>{project.content.summary}</p>
            <h4>Technology</h4>
            <p>{project.content.technology}</p>
            <h4>My Tasks</h4>
            <ul className="list-group">
              <li><p3>Used handlebars templates to create 5+ views using HTML & CSS</p3></li>
              <li><p3>Wrote HTML form logic to call REST API endpoints</p3></li>
              <li><p3>Created User, Team, and Game entities to be saved in MongoDB database</p3></li>
              <li><p3>Configured Mongoose to simplify interactions between server and database </p3></li>
              <li><p3>Used Node JS for JavaScript run-time environment </p3></li>
              <li><p3>Wrote REST API using Express JS and specified logic within application endpoints</p3></li>
              <li><p3>Utilized Passport JS to implement authentication using JSON Web Tokens and OAuth 2.0</p3></li>
              <li><p3>Called Twilio SMS microservices to send text messages to users</p3></li>
              <li><p3>Called external MySportsFeeds API to continuously update game states </p3></li>
            </ul>
            <h4>Problem</h4>
            <p>{project.content.problem}</p>
            <h4>Solution</h4>
            <p>{project.content.solution}</p>
            <Image fine="Blitz Login" path = "projects/blitz/blitz-login.png" />
            <Image fine="Blitz Sign Up" path = "projects/blitz/blitz-signup.png" />
            <Image fine="Blitz Profile" path = "projects/blitz/blitz-profile.png" />
            <br/>
            <br/>
            <br/>
            <div className="row">
              <Button margin="0px auto" link={Links.github + "/blitz"} btnType = "btnLarge">Github</Button>
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
            <h4>Technology</h4>
            <p>{project.content.technology}</p>
            <h4>My Tasks</h4>
            <ul className="list-group">
              <li><p3>Used Mongoose to simplify interactions between server and database</p3></li>
              <li><p3>Set up Node JS for JavaScript run-time environment</p3></li>
              <li><p3>Wrote REST API using Express JS and specified logic within application endpoints</p3></li>
              <li><p3>Utilized web sockets using Socket.IO to create real-time game lobby “rooms”</p3></li>
              <li><p3>Configured MongoDB to store game entities including number of players and room ID</p3></li>
              <li><p3>Generated unique hexatridecimal ID using UniqID NPM library</p3></li>
              <li><p3>Implemented game logic using JavaScript DOM manipulation</p3></li>
              <li><p3>Used handlebars templates to create 5+ views using HTML & CSS</p3></li>
            </ul>
            <Image fine="Munkee Game Screen" path = "projects/munkee/munkee-web.png" />
            <Image fine="Munkee Mobile Game Screen" path = "projects/munkee/munkee-mobile.png" />
            <br/>
            <br/>
            <br/>
            <div className="row">
              <Button margin="0px auto" link={Links.github + "/munkee"} btnType = "btnLarge">Github</Button>
            </div>
            <br/>
            <div className="row">
              <Button margin="0px auto" link={Links.munkee} btnType = "btnLarge">Play Now</Button>
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
            <Image path = "projects/airdrums/airdrums.png" />
            <hr/>
            <h4>Summary</h4>
            <p>{project.content.summary}</p>
            <h4>Technology</h4>
            <p>{project.content.technology}</p>
            <br/>
            <br/>
            <br/>
            <div className="row">
              <Button margin="0px auto" link={"https://github.com/kvptkr/Air-Drums--UoftHacks-2019"} btnType = "btnLarge">Github</Button>
            </div>
            <br/>
            <div className="row">
              <Button margin="0px auto" link={"https://devpost.com/software/airdrums-39k0ny"} btnType = "btnLarge">Devpost</Button>
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
            <Image path = "projects/ryse/ryse.png" />
            <hr/>
            <h4>Summary</h4>
            <p>{project.content.summary}</p>
            <h4>Technology</h4>
            <p>{project.content.technology}</p>
            <br/>
            <br/>
            <br/>
            <div className="row">
              <Button margin="0px auto" link={Links.github + "/ryse"} btnType = "btnLarge">Github</Button>
            </div>
            <br/>
            <div className="row">
              <Button margin="0px auto" link={"https://devpost.com/software/ryse"} btnType = "btnLarge">Desktop</Button>
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
              <Button margin="0px auto" link={Links.github + "/moodify"} btnType = "btnLarge">Github</Button>
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