import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from 'pages/Landing'
import Results from 'pages/Results'

const App = () => (
  <>
    <div className="navigation" />
    <div className="main-content">
      <Router>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/results/:model?" component={Results} />
        </Switch>
      </Router>
    </div>
  </>
)

export default App