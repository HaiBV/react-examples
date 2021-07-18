import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from 'components/layout/header/Header';
import RoutesConfig from 'config/route/RoutesConfig';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router basename='/'>
        <Header />
        <Suspense
          fallback={() => {
            <div>loading</div>;
          }}
        >
          <Switch>
            {RoutesConfig.publicRoutes.map(({ path, component }) => {
              return <Route exact={true} key={path} path={path} component={component} />;
            })}
            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
