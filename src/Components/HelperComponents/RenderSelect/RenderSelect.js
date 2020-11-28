import React from 'react';
import Select from 'react-select';
import './RenderSelect.scss';

const RenderSelect = ({field, ...props}) => {
    const options = [
        { value: 'Food', label: 'Food' },
        { value: 'Being Fabulous', label: 'Being Fabulous' },
        { value: 'Ken Wheeler', label: 'Ken Wheeler' },
        { value: 'ReasonML', label: 'ReasonML' },
        { value: 'Unicorns', label: 'Unicorns' },
        { value: 'Kittens', label: 'Kittens' },
      ];
    return (
        <div className="wrapper-select">
            <Select {...field} {...props} options={options} />
        </div>
    );
}

export default RenderSelect;
