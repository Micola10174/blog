import React from "react";
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
    .min(100, "Too Short!")
    .max(300, "Too Long!")
    .required("Required"),
  // email: Yup.string().email("Invalid email").required("Required"),
});



const FormPost = () => {

  const options = [
    { value: 'Food', label: 'Food' },
    { value: 'Being Fabulous', label: 'Being Fabulous' },
    { value: 'Ken Wheeler', label: 'Ken Wheeler' },
    { value: 'ReasonML', label: 'ReasonML' },
    { value: 'Unicorns', label: 'Unicorns' },
    { value: 'Kittens', label: 'Kittens' },
  ];
  

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        location: "Food"
      }}
      validationSchema={PostSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
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
           name="location"
           options={options}
           component={RenderSelect}
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormPost;

