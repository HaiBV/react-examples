import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from 'components/layout/header/Header';
import RoutesConfig from 'config/route/RoutesConfig';

const Layout = (props) => {
  return (
    <div className='container'>
      <Router basename='/'>
        <Header />
        <div className='site-content'>
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
        </div>
      </Router>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
