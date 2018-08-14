import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from 'pages/Landing'
import Results from 'pages/Results'
import Details from 'pages/Details'

class App extends Component {
  render() {
    return (
      <>
        <div className="navigation" />
        <div className="main-content">
          <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/inventory/model/:model/:key?/:value?/results" component={Results} />
              <Route path="/vehicle/:vin?" component={Details} />
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}

export default App