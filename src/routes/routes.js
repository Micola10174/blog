import React from 'react';
import App from '../Containers/App';
import {Route, Switch, Redirect} from 'react-router-dom';
import Container from '../Containers/Container/Container';
import AuthContainer from '../Containers/AuthContainer/AuthContainer'
import Admin from '../Components/Admin/Admin';

export default (
    <App>
        <Switch>
            <Route exact path="/" component={() => <Redirect to="/main"/>} />
            <Route path='/auth' component={AuthContainer}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/main' component={Container} />
        </Switch>
    </App>
)