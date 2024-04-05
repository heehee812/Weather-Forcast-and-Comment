import React from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    Input,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import './PostForm.css';

export default class PostForm extends React.Component {
    static propTypes = {
        onPost: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            inputValue: props.city,
            inputDanger: false,
            moodToggle: false,
            mood: 'na'
        };
    }

    render() {
        const { inputValue, moodToggle, mood } = this.state;
        const inputDanger = this.state.inputDanger ? 'has-danger' : '';
        return (
            <p>Postform</p>
        );
    }
}