import React from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    Input,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import './WeatherForm.css';

export default class WeatherForm extends React.Component {
    static propTypes = {
        city: PropTypes.string,
        unit: PropTypes.string
    };

    static getUnitString(unit) {
        return unit === 'metric' ? 'C' : 'F';
    }

    constructor(props) {
        super(props);

        this.inputEl = null;
        this.state = {
            inputValue: props.city,
            tempToggle: false,
            unit: props.unit
        };
    }

    render() {
        return (
            <div className='weather-form'>
                <Form className='form-inline justify-content-center'></Form>
                <p>Weather Formmmmmm</p>
            </div>
        );
    }
}