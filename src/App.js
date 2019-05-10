import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import Layout from './hoc/Layout/Layout';
import Home from './views/Home/Home';
import MyStory from './views/MyStory/MyStory';
import ProjectSelect from './views/Projects/ProjectSelect';
import Gallery from './views/Gallery/Gallery';
import Navigation from './components/Navigation/MainNav/MainNav';
import MobileNav from './components/Navigation/MobileNav/MobileNav';
import Footer from './components/Footer/Footer';
import styles from './App.css';
import Waypoint from 'react-waypoint';
import SNL from './views/Gallery/GalleryDetails/SNL/SNL';
import WaterlooEngineering from './views/Gallery/GalleryDetails/WaterlooEngineering/WaterlooEngineering';
import GraphQL from './views/Gallery/GalleryDetails/GraphQL/GraphQL';
import Aux from './hoc/HO-Aux/HO-aux';
import Spinner from './components/Spinner/Spinner';
import Experience from './views/Projects/ProjectSections/Experience/Experience';
import Hackathons from './views/Projects/ProjectSections/Hackathons/Hackathons';
import DataScience from './views/Projects/ProjectSections/DataScience/DataScience';
import WebMobile from './views/Projects/ProjectSections/WebMobile/WebMobile';
import DialogContent from './components/DialogContent/DialogContent';
import { withStyles } from '@material-ui/core';
import ProjectDialogContent from './components/ProjectDialogContent/ProjectDialogContent';
import Icon from './components/Icon/Icon';
import Photos from './views/Gallery/GalleryDetails/Photos/Photos';
import Huddle from './views/Projects/ProjectDetails/Huddle/Huddle';

function Transition(props) {
  return <Slide direction="down" timeout= "0"  {...props} />;
}

const ContactModal = withStyles({
  paper: {
    borderRadius: '15px',
    top: '-12%',
    overflowX: 'hidden',
    margin: '20px;',
  }
})(Dialog);

const ProjectModal = withStyles({
  paper: {
    borderRadius: '15px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    margin: '20px;',
    maxWidth: '100vw;'
  }
})(Dialog);

class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.onContactModalOpen = this.onContactModalOpen.bind(this);
    this.closeContactModal = this.closeContactModal.bind(this);
    this.onProjectSelected = this.onProjectSelected.bind(this);
    this.closeProjectModal = this.closeProjectModal.bind(this);
  }

  state = {
    isLoading: false,
    contactModalIsOpen: false,
    projectModalIsOpen: false,
    projectSelected: ""
  }

  componentDidMount = () => {
    this.setState({isLoading: true})
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 600);
  }

  onContactModalOpen() {
    this.setState({contactModalIsOpen: true})
  }

  closeContactModal() {
    this.setState({contactModalIsOpen: false});
  }

  onProjectSelected(project) {
    this.setState({projectModalIsOpen: true})
    this.setState({projectSelected: project})
  }

  closeProjectModal() {
    this.setState({projectModalIsOpen: false});
  }

  onWaypoint = () => {
    if(this.child.current) {
      this.child.current.navChangeHandler();
    } else {
      return 0;
    }
  }

  render() {

    let routes = (
      <Switch>
        <Route exact path="/gallery/saturday-night-lights" component={SNL} />
        <Route exact path="/gallery/waterloo-engineering" component={WaterlooEngineering} />
        <Route exact path="/gallery/graphql" component={GraphQL} />
        <Route exact path="/gallery/photos" component={Photos} />
        <Route exact path="/projects/hackathons" render={() => <Hackathons openProject = {this.onProjectSelected}/>} />
        <Route exact path="/projects/experience" render={() => <Experience openProject = {this.onProjectSelected}/>} />
        <Route exact path="/projects/web-mobile" render={() => <WebMobile openProject = {this.onProjectSelected}/>} />
        <Route exact path="/projects/data-science" render={() => <DataScience openProject = {this.onProjectSelected}/>} />
        <Route exact path="/projects" component={ProjectSelect} />
        <Route exact path="/my-story" component={MyStory} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/projects/web-mobile/huddle" component={Huddle} />
        <Route exact path="/" component={Home} />
        <Redirect exact to="/" />
      </Switch>
    )

    return (
      <Aux>
        {this.state.isLoading ? <Spinner/> :
          <BrowserRouter>
            <div className="App" styleName="main-wrapper">
              <Waypoint topOffset={"-1px"} bottomOffset={"6000px"}
                onEnter={() => {
                  this.onWaypoint();
                }}
                onLeave={() => {
                  this.onWaypoint();
                  }}
              />
              <Layout modalOpen = {this.onContactModalOpen}>
                  {routes}
                  <Navigation modalOpen = {this.onContactModalOpen} ref={this.child} />
                  <MobileNav modalOpen = {this.onContactModalOpen}/>
                  <ContactModal TransitionComponent={Transition} 
                  onBackdropClick = {this.closeContactModal} 
                  styleName="modal-contact" 
                  open={this.state.contactModalIsOpen}
                  >
                    <DialogContent>
                      <Icon iconName="fas fa-times" close={this.closeContactModal} iconType="iconClose" />
                    </DialogContent>
                  </ContactModal>
                  <ProjectModal TransitionComponent={Transition} 
                  onBackdropClick = {this.closeProjectModal} 
                  styleName="modal-project" 
                  open={this.state.projectModalIsOpen}
                  >
                    <ProjectDialogContent close= {this.closeProjectModal} project = {this.state.projectSelected}/>
                  </ProjectModal>
              <Footer />
              </Layout>
            </div>
          </BrowserRouter>
        }
      </Aux>
    );
  }
}

export default CSSModules(App, styles);
