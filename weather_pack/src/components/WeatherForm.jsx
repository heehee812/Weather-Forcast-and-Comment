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

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className='weather-form'>
                <Form className='form-inline justify-content-center' onSubmit={this.handleSubmit}>
                    
                </Form>
                <p>Weather Formmmmmm</p>
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();

        this.inputEl.blur();
        if (this.state.inputValue && this.state.inputValue.trim()) {
            this.props.onQuery(this.state.inputValue, this.state.unit);
        } else {
            this.state.inputEl = this.props.city;
        }
    }
}