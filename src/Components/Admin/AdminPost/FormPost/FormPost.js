import React, {useState} from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RenderField from "../../../HelperComponents/RenderField/RenderField";
import ReanderTextArea from "../../../HelperComponents/RenderTextArea/ReanderTextArea";
import RenderSelect from "../../../HelperComponents/RenderSelect/RenderSelect";
import "./FormPost.scss";



const PostSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(50, "Too Short!")
    .max(300, "Too Long!")
    .required("Required"),
  topic: Yup.string()
    .required("Required")
});



const FormPost = ({topics}) => {
  console.log(topics)

  // {idcategories: 1, title: "Activities"}
  const options = topics.map(topic => {
    return {
      value: topic.idcategories,
      label: topic.title
    }
  })


  const onSubmit = (value, {resetForm}) => {
    console.log(value)
    resetForm()
    // setOptions("")
  }

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        topic: { value: '6', label: 'Kittens' }
      }}
      validationSchema={PostSchema}
      onSubmit={onSubmit}
    >
      <Form className="form-post">
        <Field
          type="text"
          name="title"
          placeholder="Title"
          component={RenderField}
        />
        <Field
          name="description"
          placeholder="Description"
          component={ReanderTextArea}
        />
        <Field
           name="topic"
           options={options}
           component={RenderSelect}
           placeholder="Select topics"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormPost;

