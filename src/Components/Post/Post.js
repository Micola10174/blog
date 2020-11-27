import React from "react";
import postImage from '../../assets/images/post-image-1.jpg';
import "./Post.scss";

const Post = ({index, post, handleRedirect}) => {
    console.log(post)
  return (
    <div className="post" key={index} >
      <div className="post-image">
          <img src={postImage} />
      </div>
      <div className="post-wraper-description">
          <div className="post-wraper-description__label">
              {post.idcategorie}
          </div>
          <h2 className="post-title">{post.title}</h2>
            <div className="post-body">
                <div className="postareameta">
                  {/*7:28 AM*/}
                    {post.pubdate}
                  <i class="comments"></i>
                  3
                </div>
                <div className="description">
                    {post.description}
                </div>
                <div className="latestpostreadmore">
                  <a onClick={() => handleRedirect(post.idpost)}>READ MORE</a>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Post;
