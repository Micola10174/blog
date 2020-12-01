import React, { Component, Fragment } from 'react';
import HeaderAdmin from './HeaderAdmin/HeaderAdmin';
import NavigationAdmin from './NavigationAdmin/NavigationAdmin';
import {Switch, Route, Redirect} from 'react-router-dom';
import AdminPost from './AdminPost/AdminPost';
import AdminTopic from './AdminTopic/AdminTopic';
import AdminUsers from './AdminUsers/AdminUsers';
import './Admin.scss';


class Admin extends Component{
    state = {
        isActiveMenu: false
    }

    handleOpenMenu = () => {
        this.setState({isActiveMenu: true})
    }

    handleCloseMenu = e => {
        if(e.target.tagName === 'ASIDE'){
            this.setState({isActiveMenu: false})
        }
    }

    render(){
        const { isActiveMenu } = this.state;
        const { match } = this.props;
        return(
            <Fragment>
                <HeaderAdmin handleOpenMenu={this.handleOpenMenu} />
                <NavigationAdmin isActiveMenu={isActiveMenu} handleCloseMenu={this.handleCloseMenu}/>
                <div className="container-admin">
                    <Switch>
                        <Route exact path={match.url} component={() => <Redirect to={`${match.url}/posts`}/>} />
                        <Route  path={`${match.url}/posts`}   component={AdminPost} />
                        <Route  path={`${match.url}/topics`}  component={AdminTopic}/>
                        <Route  path={`${match.url}/users`}   component={AdminUsers}/>
                    </Switch>
                </div>
            </Fragment>
        )
    }
}

export default Admin;