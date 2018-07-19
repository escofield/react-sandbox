import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from 'redux'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Login from "./login"
import rootReducer from './reducers'

const store = createStore(rootReducer)

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Stuff</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/login" component={Login}/>
            </div>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}
 
export default Main;