import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RenderField from "../../../HelperComponents/RenderField/RenderField";
import "./FormPost.scss";

const PostSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const FormPost = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
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
          name="firstName"
          placeholder="Title"
          component={RenderField}
        />
        <Field
          type="text"
          name="lastName"
          placeholder="Description"
          component={RenderField}
        />
        <Field
          name="email"
          type="text"
          placeholder="Email"
          component={RenderField}
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormPost;

