import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Fade from 'react-reveal/Fade';

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
import DataScience from './views/Projects/ProjectSections/Data/Data';
import SideProjects from './views/Projects/ProjectSections/SideProjects/SideProjects';
import DialogContent from './components/DialogContent/DialogContent';
import { withStyles } from '@material-ui/core';
import Icon from './components/Icon/Icon';
import Photos from './views/Gallery/GalleryDetails/Photos/Photos';
import Huddle from './views/Projects/ProjectDetails/Huddle/Huddle';
import Opentext from './views/Projects/ProjectDetails/Opentext/Opentext';
import Blitz from './views/Projects/ProjectDetails/Blitz/Blitz';
import Moodify from './views/Projects/ProjectDetails/Moodify/Moodify';
import Airdrums from './views/Projects/ProjectDetails/Airdrums/Airdrums';
import Ryse from './views/Projects/ProjectDetails/Ryse/Ryse';
import Munkee from './views/Projects/ProjectDetails/Munkee/Munkee';
import Freelance from './views/Projects/ProjectDetails/Freelance/Freelance';
import Ctc from './views/Projects/ProjectDetails/Ctc/Ctc';
import LCBONext from './views/Projects/ProjectDetails/LCBONext/LCBONext';
import UWBlueprint from './views/Projects/ProjectDetails/UWBlueprint/UWBlueprint';
import ShellChatbot from './views/Projects/ProjectDetails/ShellChatbot/ShellChatbot';
import OubreSA from './views/Projects/ProjectDetails/OubreSA/OubreSA';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.onContactModalOpen = this.onContactModalOpen.bind(this);
    this.closeContactModal = this.closeContactModal.bind(this);
  }

  state = {
    isLoading: false,
    contactModalIsOpen: false,
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
        <Route exact path="/projects/hackathons" component={Hackathons} />
        <Route exact path="/projects/experience" component={Experience} />
        <Route exact path="/projects/side-projects" component={SideProjects} />
        <Route exact path="/projects/data" component={DataScience} />
        <Route exact path="/projects" component={ProjectSelect} />
        <Route exact path="/my-story" component={MyStory} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/projects/side-projects/shell-chatbot" component={ShellChatbot} />
        <Route exact path="/projects/side-projects/huddle" component={Huddle} />
        <Route exact path="/projects/side-projects/blitz" component={Blitz} />
        <Route exact path="/projects/side-projects/munkee" component={Munkee} />
        <Route exact path="/projects/experience/lcbo-next" component={LCBONext} />
        <Route exact path="/projects/experience/uwblueprint" component={UWBlueprint} />
        <Route exact path="/projects/experience/opentext" component={Opentext} />
        <Route exact path="/projects/experience/freelance" component={Freelance} />
        <Route exact path="/projects/data/oubre-sentiment-analysis" component={OubreSA} />
        <Route exact path="/projects/experience/ctc" component={Ctc} />
        <Route exact path="/projects/hackathons/moodify" component={Moodify} />
        <Route exact path="/projects/hackathons/airdrums" component={Airdrums} />
        <Route exact path="/projects/hackathons/ryse" component={Ryse} />
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
              <Fade bottom>
              <Footer />
              </Fade>
              </Layout>
            </div>
          </BrowserRouter>
        }
      </Aux>
    );
  }
}

export default CSSModules(App, styles);
