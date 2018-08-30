import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Layout from './hoc/Layout/Layout';
import Home from './views/Home/Home';
import Navigation from './components/Navigation/MainNav/MainNav';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" styleName="main-wrapper">
        <Layout>
          <Home />
          <Navigation  />
          <Modal styleName="modal" targetName="contactModal" />
        </Layout>
        <Footer />
      </div>
    );
  }
}

export default CSSModules(App, styles);
