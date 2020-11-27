import React, { Fragment } from "react";
import "./RenderField.scss";

const RenderField = ({
  field,
  type,
  placeholder,
  form: { touched, errors },
}) => {
  return (
    <div className="wrapper-input">
      <input
        className="my-input"
        type={type}
        placeholder={placeholder}
        {...field}
      />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default RenderField;
