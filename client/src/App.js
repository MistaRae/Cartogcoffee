import React from 'react';
import './App.css';
import UiContainer from './containers/UiContainer'
import Preparation from './components/prep_components/Preparation'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 




const App = () => {
   
    return (
      <Router>
        <div className="App">
          <Header/>
            <Switch>
              <Route path = '/Preparation' component = {Preparation}></Route>
              <Route path = '/' component = {UiContainer}></Route>
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
  
}



export default App;
