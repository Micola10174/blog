import React, { Component } from "react";
import FormTopic from "./FormTopic/FormTopic";
import { connect } from "react-redux";
import { postTopics, getTopics, deleteTopic } from "../../../actions/topicActions";
import imageEdit from "../../../assets/images/edit.png";
import "./AdminTopic.scss";

class AdminTopic extends Component {
  state = {
    page: "1",
  };

  componentDidMount() {
    const { getTopics } = this.props;
    getTopics();
  }

  handleOpenForm = (pageNum) => {
    const { getTopics } = this.props;
    getTopics();
    this.setState({ page: pageNum });
  };

  handleDeleteToic = id => {
      const { deleteTopic } = this.props;
      deleteTopic(id)
  }

  render() {
    const {
      postTopics,
      topics: { topic },
    } = this.props;
    const { page } = this.state;
    return (
      <div className="wrapper-admin-topic">
        <div className="panels-control">
          <button
            class="btn green-sucess"
            onClick={() => this.handleOpenForm("2")}
          >
            Add Topic
          </button>
          <button
            class="btn blue-info"
            onClick={() => this.handleOpenForm("1")}
          >
            Manage Topic
          </button>
        </div>
        <h1>Topic</h1>
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
              {topic.map((el, index) => {
                return (
                  <div className="list-item" key={index}>
                    <div className="list-collections__info">
                      <li>{el.idcategories}</li>
                      <li>{el.title}</li>
                    </div>
                    <div className="list-collections__control">
                      <li className="list-collections__edit">
                        <img src={imageEdit} onClick={() => this.handleDeleteToic(el.idcategories)} />
                      </li>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        ) : (
          <FormTopic postTopics={postTopics} handleOpenForm={this.handleOpenForm}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
  };
};
const mapDispatchToProps = {
  postTopics,
  getTopics,
  deleteTopic
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminTopic);
