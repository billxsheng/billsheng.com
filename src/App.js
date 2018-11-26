import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import Layout from './hoc/Layout/Layout';
import Home from './views/Home/Home';
import About from './views/About/About';
import ProjectSelect from './views/Projects/ProjectSelect';
import Gallery from './views/Gallery/Gallery';
import Navigation from './components/Navigation/MainNav/MainNav';
import Footer from './components/Footer/Footer';
import styles from './App.css';
import Waypoint from 'react-waypoint';
import Blitz from './views/Projects/ProjectDetails/Blitz/Blitz';
import canadianTire from './views/Projects/ProjectDetails/CTC/CTC';
import Moodify from './views/Projects/ProjectDetails/Moodify/Moodify';
import Munkee from './views/Projects/ProjectDetails/Munkee/Munkee';
import prog from './views/Projects/ProjectDetails/PROG/PROG';
import Ryse from './views/Projects/ProjectDetails/Ryse/Ryse';
import VCuts from './views/Projects/ProjectDetails/VCuts/VCuts';
import SNL from './views/Gallery/GalleryDetails/SNL/SNL';
import WaterlooEngineering from './views/Gallery/GalleryDetails/WaterlooEngineering/WaterlooEngineering';
import GraphQL from './views/Gallery/GalleryDetails/GraphQL/GraphQL';
import pweb from './views/Projects/ProjectDetails/pweb/pweb';
import Aux from './hoc/HO-Aux/HO-aux';
import Spinner from './components/Spinner/Spinner';
import Experience from './views/Projects/ProjectSections/Experience/Experience';
import Hackathons from './views/Projects/ProjectSections/Hackathons/Hackathons';
import DataScience from './views/Projects/ProjectSections/DataScience/DataScience';
import WebMobile from './views/Projects/ProjectSections/WebMobile/WebMobile';
import OpenText from './views/Projects/ProjectDetails/OpenText/OpenText';
import DialogContent from './components/DialogContent/DialogContent';
import { withStyles } from '@material-ui/core';

function Transition(props) {
  return <Slide direction="down" timeout= "0"  {...props} />;
}

const Modal = withStyles({
  paper: {
    borderRadius: '15px',
    top: '-50px',
    overflowX: 'hidden',
    margin: '20px;'
  }
})(Dialog);

class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.onModalOpen = this.onModalOpen.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  state = {
    isLoading: false,
    modalIsOpen: false
  }

  onModalOpen() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount = () => {
    this.setState({isLoading: true})
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 600);
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
        <Route exact path="/projects/experience/opentext" component={OpenText} />
        <Route exact path="/projects/web-mobile/blitz" component={Blitz} />
        <Route exact path="/projects/experience/canadian-tire" component={canadianTire} />
        <Route exact path="/projects/hackathons/moodify" component={Moodify} />
        <Route exact path="/projects/web-mobile/munkee" component={Munkee} />
        <Route exact path="/projects/web-mobile/prog" component={prog} />
        <Route exact path="/projects/hackathons/ryse" component={Ryse} />
        <Route exact path="/projects/web-mobile/vcuts" component={VCuts} />
        <Route exact path="/projects/web-mobile/personal-website" component={pweb} />
        <Route exact path="/projects/hackathons" component={Hackathons} />
        <Route exact path="/projects/experience" component={Experience} />
        <Route exact path="/projects/data-science" component={DataScience} />
        <Route exact path="/projects/web-mobile" component={WebMobile} />
        <Route exact path="/projects" component={ProjectSelect} />
        <Route exact path="/about" component={About} />
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
              <Layout modalOpen = {this.onModalOpen}>
                  {routes}
                  <Navigation modalOpen = {this.onModalOpen} ref={this.child} />
                  <Modal TransitionComponent={Transition} 
                  onBackdropClick = {this.closeModal} 
                  styleName="modal" 
                  open={this.state.modalIsOpen}
                  >
                    <DialogContent>
                      <a styleName="btn-close" onClick={this.closeModal} btnType="btnLarge">Close</a>
                    </DialogContent>
                  </Modal>
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
