import React, { Component } from "react";
import FormTopic from "./FormTopic/FormTopic";
import { connect } from "react-redux";
import { postTopics, getTopics, deleteTopic, updateTopic } from "../../../actions/topicActions";
import imageEdit from "../../../assets/images/edit.png";
import imageDelete from '../../../assets/images/delete.png';
import "./AdminTopic.scss";

class AdminTopic extends Component {
  state = {
    page: "1",
    editEl: null
  };

  componentDidMount() {
    const { getTopics } = this.props;
    getTopics();
  }

  handleOpenForm = (pageNum) => {
    const { getTopics } = this.props;
    getTopics();
    if(pageNum === '1'){
        this.setState({ page: pageNum, editEl: null });
    }else{
        this.setState({ page: pageNum });
    }
    
  };

  handleDeleteToic = id => {
      const { deleteTopic } = this.props;
      deleteTopic(id)
  }

  handleEdit = el => {
    //   this.setState({isEdit: true, page: '2'})
    this.setState({editEl: el, page: '2'})
  }

  render() {
    const {postTopics, updateTopic, topics: { topic } } = this.props;
    const { page, editEl } = this.state;
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
                        <img src={imageEdit}  onClick={() => this.handleEdit(el)} />
                      </li>
                      <li className="list-collections__edit">
                        <img src={imageDelete} onClick={() => this.handleDeleteToic(el.idcategories)} />
                      </li>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        ) : (
          <FormTopic postTopics={postTopics} updateTopic={updateTopic} handleOpenForm={this.handleOpenForm} editEl={editEl}/>
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
  deleteTopic,
  updateTopic
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminTopic);
