import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CarsPage from 'pages/Cars'
import LayoutPage from 'pages/Layout'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CarsPage} />
          <Route exact path="/layout" component={LayoutPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
