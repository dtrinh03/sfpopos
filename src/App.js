import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer'
import {HashRouter as Router, Route} from 'react-router-dom'
import About from './About'
import POPOSDetails from './POPOSDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="./POPOSList" component={POPOSList}/>
        <Route path="./About" component={About}/>
        <Route path="./details/:id" component={POPOSDetails}/>
      </div>
      <div>

      </div>
  </Router>
  );
}

export default App;
