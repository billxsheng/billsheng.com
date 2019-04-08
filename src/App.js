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
import Blitz from './views/Projects/ProjectDetails/Blitz/Blitz';
import canadianTire from './views/Projects/ProjectDetails/CTC/CTC';
import Moodify from './views/Projects/ProjectDetails/Moodify/Moodify';
import Munkee from './views/Projects/ProjectDetails/Munkee/Munkee';
import Ryse from './views/Projects/ProjectDetails/Ryse/Ryse';
import VCuts from './views/Projects/ProjectDetails/VCuts/VCuts';
import SNL from './views/Gallery/GalleryDetails/SNL/SNL';
import WaterlooEngineering from './views/Gallery/GalleryDetails/WaterlooEngineering/WaterlooEngineering';
import GraphQL from './views/Gallery/GalleryDetails/GraphQL/GraphQL';
import Aux from './hoc/HO-Aux/HO-aux';
import Spinner from './components/Spinner/Spinner';
import Experience from './views/Projects/ProjectSections/Experience/Experience';
import Hackathons from './views/Projects/ProjectSections/Hackathons/Hackathons';
import DataScience from './views/Projects/ProjectSections/DataScience/DataScience';
import WebMobile from './views/Projects/ProjectSections/WebMobile/WebMobile';
import OpenText from './views/Projects/ProjectDetails/OpenText/OpenText';
import DialogContent from './components/DialogContent/DialogContent';
import { withStyles } from '@material-ui/core';
import Huddle from './views/Projects/ProjectDetails/Huddle/Huddle';
import Airdrums from './views/Projects/ProjectDetails/Airdrums/Airdrums';
import Freelance from './views/Projects/ProjectDetails/Freelance/Freelance';
import ProjectDialogContent from './components/ProjectDialogContent/ProjectDialogContent';

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
    top: '-15%',
    overflowX: 'hidden',
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
    console.log(project);
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
        <Route exact path="/projects/hackathons" render={() => <Hackathons openProject = {this.onProjectSelected}/>} />
        <Route exact path="/projects/hackathons/moodify" component={Moodify} />
        <Route exact path="/projects/hackathons/ryse" component={Ryse} />
        <Route exact path="/projects/hackathons/airdrums" component={Airdrums} />
        <Route exact path="/projects/experience" render={() => <Experience openProject = {this.onProjectSelected}/>} />
        <Route exact path="/projects/experience/freelance" component={Freelance} />
        <Route exact path="/projects/experience/canadian-tire" component={canadianTire} />
        <Route exact path="/projects/experience/opentext" component={OpenText} />
        <Route exact path="/projects/web-mobile" render={() => <WebMobile openProject = {this.onProjectSelected}/>} />
        <Route exact path="/projects/web-mobile/vcuts" component={VCuts} />
        <Route exact path="/projects/web-mobile/munkee" component={Munkee} />
        <Route exact path="/projects/web-mobile/blitz" component={Blitz} />
        <Route exact path="/projects/web-mobile/huddle" component={Huddle} />
        <Route exact path="/projects/data-science" render={() => <DataScience openProject = {this.onProjectSelected}/>} />
        <Route exact path="/projects" component={ProjectSelect} />
        <Route exact path="/my-story" component={MyStory} />
        <Route exact path="/gallery" component={Gallery} />
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
                      <a styleName="btn-close-contact" onClick={this.closeContactModal}>Close</a>
                    </DialogContent>
                  </ContactModal>
                  <ProjectModal TransitionComponent={Transition} 
                  onBackdropClick = {this.closeProjectModal} 
                  styleName="modal-project" 
                  open={this.state.projectModalIsOpen}
                  >
                    <ProjectDialogContent project = {this.state.projectSelected}>
                      <a styleName="btn-close-project" onClick={this.closeContactModal}>Close</a>
                    </ProjectDialogContent>
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
