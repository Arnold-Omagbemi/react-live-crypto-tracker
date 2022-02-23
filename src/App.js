import React,{ useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import fire from './fire';
import { Login } from './Login';
import { Hero } from './Hero';

const App = () => { 

  

  return (
    <Router>
      <Switch>
            <Route path='/'>
              <Hero />
           </Route>
       
        </Switch>
    </Router>
  );
}

export default App;
