import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './views/Home/Home';
import Navigation from './components/Navigation/MainNav/MainNav';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Layout>
          <Home/>
        </Layout>
        <Footer/>
      </div>
    );
  }
}

export default App;
