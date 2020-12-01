import React, {useState} from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RenderField from "../../../HelperComponents/RenderField/RenderField";
import "./FormTopic.scss";



const PostSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});



const FormTopic = ({postTopics, handleOpenForm}) => {
  const onSubmit = (value, {resetForm}) => {
    postTopics(value).then(res => {
      if(res.payload && res.payload.status === 201){
         resetForm()
         handleOpenForm('1')
      }
    })
  }

  return (
    <Formik
      initialValues={{
        title: "",
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
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormTopic;

