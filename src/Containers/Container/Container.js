import React, {Component, Fragment} from "react";
import {Switch, Route} from 'react-router-dom';
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";
import PostPage from "../../Components/PostPage/PostPage";


class Container extends Component{
    render() {
        const {match} = this.props;
        return(
            <Fragment>
                <Header/>
                <Switch>
                    <Route path={match.url} exact component={Main} />
                    <Route path={`${match.url}/post`} component={PostPage} />
                </Switch>
                <Footer />
            </Fragment>
        )
    }
}

export default Container;