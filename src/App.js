import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import Home from './views/Home/Home';
import ProjectSelect from './views/Projects/ProjectSelect';
import styles from './App.css';
import Waypoint from 'react-waypoint';
import Experience from './views/Projects/ProjectSections/Experience/Experience';
import Hackathons from './views/Projects/ProjectSections/Hackathons/Hackathons';
import DataScience from './views/Projects/ProjectSections/Data/Data';
import SideProjects from './views/Projects/ProjectSections/SideProjects/SideProjects';
import { withStyles } from '@material-ui/core';
import Huddle from './views/Projects/ProjectDetails/Huddle/Huddle';
import Opentext from './views/Projects/ProjectDetails/Opentext/Opentext';
import Blitz from './views/Projects/ProjectDetails/Blitz/Blitz';
import Moodify from './views/Projects/ProjectDetails/Moodify/Moodify';
import Airdrums from './views/Projects/ProjectDetails/Airdrums/Airdrums';
import Ryse from './views/Projects/ProjectDetails/Ryse/Ryse';
import Munkee from './views/Projects/ProjectDetails/Munkee/Munkee';
import MediaPlatform from './views/Projects/ProjectDetails/MediaPlatform/MediaPlatform';
import Freelance from './views/Projects/ProjectDetails/Freelance/Freelance';
import Ctc from './views/Projects/ProjectDetails/Ctc/Ctc';
import LCBONext from './views/Projects/ProjectDetails/LCBONext/LCBONext';
import UWBlueprint from './views/Projects/ProjectDetails/UWBlueprint/UWBlueprint';
import OubreSA from './views/Projects/ProjectDetails/OubreSA/OubreSA';
import NVIDIA from './views/Projects/ProjectDetails/NVIDIA/NVIDIA';

function Transition(props) {
  return <Slide direction="down" timeout="0"  {...props} />;
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
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 600);
  }

  onContactModalOpen() {
    this.setState({ contactModalIsOpen: true })
  }

  closeContactModal() {
    this.setState({ contactModalIsOpen: false });
  }

  onWaypoint = () => {
    if (this.child.current) {
      this.child.current.navChangeHandler();
    } else {
      return 0;
    }
  }

  render() {

    let routes = (
      <Switch>
        <Route exact path="/projects/hackathons" component={Hackathons} />
        <Route exact path="/projects/experience" component={Experience} />
        <Route exact path="/projects/side-projects" component={SideProjects} />
        <Route exact path="/projects/data" component={DataScience} />
        <Route exact path="/projects" component={ProjectSelect} />
        <Route exact path="/projects/side-projects/huddle" component={Huddle} />
        <Route exact path="/projects/side-projects/blitz" component={Blitz} />
        <Route exact path="/projects/side-projects/munkee" component={Munkee} />
        <Route exact path="/projects/experience/lcbo-next" component={LCBONext} />
        <Route exact path="/projects/experience/uwblueprint" component={UWBlueprint} />
        <Route exact path="/projects/experience/opentext" component={Opentext} />
        <Route exact path="/projects/experience/freelance" component={Freelance} />
        <Route exact path="/projects/experience/nvidia" component={NVIDIA} />
        <Route exact path="/projects/data/oubre-sentiment-analysis" component={OubreSA} />
        <Route exact path="/projects/data/sql-media-platform" component={MediaPlatform} />
        <Route exact path="/projects/experience/ctc" component={Ctc} />
        <Route exact path="/projects/hackathons/moodify" component={Moodify} />
        <Route exact path="/projects/hackathons/airdrums" component={Airdrums} />
        <Route exact path="/projects/hackathons/ryse" component={Ryse} />
        <Route exact path="/" component={Home} />
        <Redirect exact to="/" />
      </Switch>
    )

    return (
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
          <div modalOpen={this.onContactModalOpen}>
            {routes}
            <ContactModal TransitionComponent={Transition}
              onBackdropClick={this.closeContactModal}
              styleName="modal-contact"
              open={this.state.contactModalIsOpen}
            >
            </ContactModal>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default CSSModules(App, styles);
