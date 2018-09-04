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
import $ from 'jquery';

class App extends Component {


  render() {

    let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/gallery" component={Gallery} />
        <Redirect to="/" />
      </Switch>
    )

    return (
      <BrowserRouter>
        <div className="App" styleName="main-wrapper">

          <Layout>
              {routes}
              <Navigation />
              <Modal styleName="modal" targetName="contactModal" />
          </Layout>
          <Waypoint onEnter={function(props) {
          console.log('scroll-hidden');
          document.getElementById('mainNav').classList.toggle('scroll-hidden');
          }}
          />
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default CSSModules(App, styles);
