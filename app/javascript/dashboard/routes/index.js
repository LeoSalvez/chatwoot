import VueRouter from 'vue-router';

import { frontendURL } from '../helper/URLHelper';
import dashboard from './dashboard/dashboard.routes';
import store from '../store';
import { validateLoggedInRoutes } from '../helper/routeHelpers';
import AnalyticsHelper from '../helper/AnalyticsHelper';
import { buildPermissionsFromRouter } from '../helper/permissionsHelper';

const routes = [...dashboard.routes];

export const router = new VueRouter({ mode: 'history', routes });
export const routesWithPermissions = buildPermissionsFromRouter(routes);

export const validateAuthenticateRoutePermission = (to, next, { getters }) => {
  const { isLoggedIn, getCurrentUser: user } = getters;

  //if (to.path === '/app/login') {
    //return next();  // Já estamos na página de login, então seguir normalmente
  //}
  function parseQueryString() {
    let assoc = {};
    const keyValues = location.search.substring(1).split("&");
    keyValues.forEach(pair => {
      const [key, value] = pair.split("=");
      if (key && value) {
        assoc[decodeURIComponent(key.replace(/\+/g, " "))] = decodeURIComponent(value.replace(/\+/g, " "));
      }
    });
    window.queryString = assoc;
    return assoc;
  }

  if (!isLoggedIn) {
    const queryString = parseQueryString();
    if (queryString && queryString.k) {
      window.location = `/app/login?k=${queryString.k}`;
      return '/app/login';
    }
    window.location = '/app/login';
    return '/app/login';
  }

  if (!to.name) {
    return next(frontendURL(`accounts/${user.account_id}/dashboard`));
  }

  const nextRoute = validateLoggedInRoutes(to, getters.getCurrentUser);
  return nextRoute ? next(frontendURL(nextRoute)) : next();
};

export const initalizeRouter = () => {
  const userAuthentication = store.dispatch('setUser');

  router.beforeEach((to, from, next) => {
    AnalyticsHelper.page(to.name || '', {
      path: to.path,
      name: to.name,
    });

    userAuthentication.then(() => {
      return validateAuthenticateRoutePermission(to, next, store);
    });
  });
};

export default router;
