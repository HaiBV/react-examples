import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Layout from 'components/layout/Layout';

function App() {
  return (
    <div className='App'>
      <Router basename='/'>
        <Suspense>
          <Layout>
            <Switch>
              {RoutesConfig.publicRoutes.map(({ path, component }: RouteConfig): ReactElement => {
                return <Route exact={true} key={path} path={path} component={component} />;
              })}
              <Route path='*'>
                <Redirect to='/' />
              </Route>
            </Switch>
          </Layout>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
