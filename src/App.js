import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';

import Loading from './pages/Layouts/loading';

// Import css
import './Apps.scss';

// Import all components
const homeAgency = React.lazy(() => import('./pages/home-agency'));


class App extends Component {

  render() {

    return (
      <React.Fragment>
        <Router>
          <React.Suspense fallback={<div><Loading /></div>}>
            <Switch>
              <Route path="/home-agency" component={homeAgency} />
             
            </Switch>
          </React.Suspense>
        </Router>
      </React.Fragment>
    );
  }
}



export default withRouter(App);


