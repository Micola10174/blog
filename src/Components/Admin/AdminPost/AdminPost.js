import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { getPosts } from '../../../actions/postActions';
import { getTopics } from '../../../actions/topicActions';
import FormPost from "./FormPost/FormPost";
import imageEdit from "../../../assets/images/edit.png";
import "./AdminPost.scss";

class AdminPost extends Component {
  state = {
    page: "1",
  };

  componentDidMount() {
      const {  getPosts, getTopics } = this.props;
      getPosts();
      getTopics();
  }
  

  handleOpenForm = (pageNum) => {
    this.setState({ page: pageNum });
  };

  render() {
    const { page } = this.state;
    const {posts: { posts }, topics: {topic}} = this.props;
    return (
      <div className="wrapper-admin-post">
        <div className="panels-control">
          <button
            class="btn green-sucess"
            onClick={() => this.handleOpenForm("2")}
          >
            Add Post
          </button>
          <button
            class="btn blue-info"
            onClick={() => this.handleOpenForm("1")}
          >
            Manage Post
          </button>
        </div>
        <h1>Posts</h1>

        {page === "1" ? (
          <div>
            <div className="info-collections">
              <div className="info-collections__info">
                <li>Id</li>
                <li>Title</li>
              </div>
              <div className="info-collections__control"></div>
            </div>
            <ul className="list">
              {posts.map((post, index) => {
                return (
                  <div className="list-item" key={index}>
                    <div className="list-collections__info">
                      <li>{post.idpost}</li>
                      <li>{post.title}</li>
                    </div>
                    <div className="list-collections__control">
                      <li className="list-collections__edit">
                        <img src={imageEdit} />
                      </li>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        ) : (
          <FormPost topics={topic} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    topics: state.topics
  };
};


const mapDispatchToProps = {
    getPosts,
    getTopics
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPost);
