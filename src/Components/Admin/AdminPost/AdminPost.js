import React, {useState} from 'react';
import FormPost from './FormPost/FormPost';
import './AdminPost.scss';


const AdminPost = () => {
    const [openFormAdd, setOpenFormAdd] = useState(false);
    const handleOpenForm = () => {
        setOpenFormAdd(true)
    }
    return (
        <div className="wrapper-admin-post">
            <div className="panels-control">
                <button class="btn green-sucess" onClick={handleOpenForm}>Add Post</button>
                <button class="btn blue-info">Manage Post</button>
            </div>
            <h1>Posts</h1>
            {
                 openFormAdd ? <FormPost /> : null
            }
           
        </div>
    );
}

export default AdminPost;
