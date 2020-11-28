import { Divider } from '@material-ui/core';
import React from 'react';
import './RenderTextArea.scss';

const ReanderTextArea = ({field, placeholder, form: { touched, errors }}) => {
    return (
        <div className="wrapper-textarea">
            <textarea {...field} placeholder={placeholder}/>
            {touched[field.name] && errors[field.name] && (
                <div className="error">{errors[field.name]}</div>
            )}
        </div>
    );
}

export default ReanderTextArea;
