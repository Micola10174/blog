import React from 'react';
import FormPost from './FormPost/FormPost';
import './AdminPost.scss';


const AdminPost = () => {
    return (
        <div className="wrapper-admin-post">
            <div className="panels-control">
                <button class="btn green-sucess">Add Post</button>
                <button class="btn blue-info">Manage Post</button>
            </div>
            <h1>Posts</h1>
            <FormPost />
        </div>
    );
}

export default AdminPost;
