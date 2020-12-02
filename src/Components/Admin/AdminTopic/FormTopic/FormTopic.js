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



const FormTopic = ({postTopics, updateTopic, handleOpenForm, editEl}) => {
  const onSubmit = (value, {resetForm}) => {
    if(editEl === null){
      postTopics(value).then(res => {
        if(res.payload && res.payload.status === 201){
           resetForm()
           handleOpenForm('1')
        }
      })
    }else{
      updateTopic({id: editEl.idcategories, data: value }).then(res => {
        if(res.payload && res.payload.status === 200){
          resetForm()
          handleOpenForm('1')
       }
      })
    }

  }
  
  let initialValueTitle = editEl ? editEl.title : ""

  return (
    <Formik
      initialValues={{
        title: initialValueTitle
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

