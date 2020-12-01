import React from 'react';
import Select from 'react-select';
import './RenderSelect.scss';


const customStyles = {
    menu: (provided, state) => ({
        ...provided,
        maxWidth: 320,
      }),
    
    control: () => ({
        // none of react-select's styles are passed to <Control />
        border: '1px solid hsl(0,0%,80%);',
        maxWidth: 320,
        display: 'flex',
        marginBottom: 20
      }),
  }

const RenderSelect = ({field, options, form, placeholder}) => {
    console.log(field.value)
    return (
        <div className="wrapper-select">
            <Select 
                width="320px"
                name={field.name} 
                options={options} 
                value={options ? options.find(option => option.value === field.value) : field.value} 
                onChange={(option) => form.setFieldValue(field.name, option.value)}
                styles={customStyles}
                placeholder={placeholder}
            />
        </div>
    );
}

export default RenderSelect;
