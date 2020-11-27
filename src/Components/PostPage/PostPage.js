import React, {Component} from "react";
import './PostPage.scss';
import Sidebar from "../Sidebar/Sidebar";
import {NavLink} from "react-router-dom";

class PostPage extends Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="container content-wrapper">
                    <div className="posts-wrapper">
                        <NavLink to="/home">Main</NavLink>
                    </div>
                    <Sidebar />
                </div>
            </div>
        )
    }
}

export default PostPage;