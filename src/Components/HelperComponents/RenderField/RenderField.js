import React from 'react'
import './RenderField.scss';

const RenderField = ({field, form: {errors, touched}, ...props}) => {
    console.log(errors.firstName && touched);
    return (
       <input 
            className="my-input" 
            {...field} 
            {...props} 
        />
    );
}

export default RenderField;
