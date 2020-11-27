import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from '../Post/Post';
import Sidebar from '../Sidebar/Sidebar';
import {addPost, getPosts} from '../../actions/postActions';
import './Main.scss';
import { LocalDining } from '@material-ui/icons';

class Main extends Component{
    state = {
      
    }

    componentDidMount() {
        const {getPosts} = this.props;
        getPosts();
    }

    handleRedirect = id => {
        const { history } = this.props;
        console.log(id)
        history.push('/main/post')
    }


    render() {
        const {addPost, posts: {posts}, match} = this.props;
        if(posts.length === 0){
            return null
        }
        return(
            <div className="container-fluid">
                <div className="container main-wrapper">

                </div>
                <div className="container">
                    <div className="block-category">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                </div>
                <div className="container content-wrapper">
                    <div className="posts-wrapper">
                        {
                            posts.map((post, index) => {
                                return(
                                    <Post post={post} index={index} handleRedirect={this.handleRedirect}/>
                                )
                            })
                        }
                    </div>
                    <Sidebar addPost={addPost} />
                </div>
                <div className="container content-widget">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = {
    addPost,
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);