import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './views/Home/Home';
import About from './views/About/About';
import Projects from './views/Projects/Projects';
import Gallery from './views/Gallery/Gallery';
import Navigation from './components/Navigation/MainNav/MainNav';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
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

class App extends Component {

  state = {
    isLoading: false
  }

  componentDidMount = () => {
    this.setState({isLoading: true})
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 600);
  }

  constructor(props) {
    super(props);
    this.child = React.createRef();
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
        <Route exact path="/projects/blitz" component={Blitz} />
        <Route exact path="/projects/canadian-tire" component={canadianTire} />
        <Route exact path="/projects/moodify" component={Moodify} />
        <Route exact path="/projects/munkee" component={Munkee} />
        <Route exact path="/projects/prog" component={prog} />
        <Route exact path="/projects/ryse" component={Ryse} />
        <Route exact path="/projects/vcuts" component={VCuts} />
        <Route exact path="/projects/personal-website" component={pweb} />
        <Route exact path="/projects" component={Projects} />
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
              <Layout>
                  {routes}
                  <Navigation ref={this.child} />
                  <Modal styleName="modal" targetName="contactModal" />
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
