import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import DashboardPage from '../components/DashboardPage';
import LoginPage  from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AddCharacterPage from '../components/AddCharacterPage';
import EditCharacterPage from '../components/EditCharacterPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={DashboardPage}/>
            <PrivateRoute path="/create" component={AddCharacterPage}/>
            <PrivateRoute path="/edit/:id" component={EditCharacterPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;




