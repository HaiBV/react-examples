import { lazy } from 'react';

const RoutesConfig = {
  publicRoutes: [
    {
      path: '/',
      isPublic: true,
      component: lazy(() => import('containers/home/Home')),
    },
    {
      path: '/locations',
      isPublic: true,
      component: lazy(() => import('containers/location/ListLocations')),
    },
  ],
  privateRoutes: [],
};

export default RoutesConfig;
