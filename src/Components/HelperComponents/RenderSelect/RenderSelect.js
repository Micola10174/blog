import React from 'react';
import Select from 'react-select';
import './RenderSelect.scss';

const RenderSelect = ({field, options, form}) => {
    return (
        <div className="wrapper-select">
            <Select name={field.name} options={options} value={options ? options.find(option => option.value === field.value) : ''} onChange={(option) => form.setFieldValue(field.name, option.value)}/>
        </div>
    );
}

export default RenderSelect;
