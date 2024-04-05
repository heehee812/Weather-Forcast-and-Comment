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

        this.inputEl = null;
        this.moodToggleEl = null;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    render() {
        const { inputValue, moodToggle, mood } = this.state;
        const inputDanger = this.state.inputDanger ? 'has-danger' : '';
        return (
            <div className='post-form'>
                <Alert color='info' className={`d-flex flex-column flex-sm-row justify-content-center ${inputDanger}`}>
                    <Input className='input' type='textarea' innerRef={el => { this.inputEl = el }} value={this.state.inputValue} onChange={this.handleInputChange} placeholder="What's on your mind?"></Input>
                    <Button className='btn-post align-self-end' color="info" onClick={this.handlePost}>Post</Button>
                </Alert>
            </div >
        );
    }

    handleInputChange(e) {
        const text = e.target.value
        this.setState({ inputValue: text });
        if (text) {
            this.setState({ inputDanger: false });
        }
    }

    handlePost() {
        if (this.state.mood === 'na') {
            this.setState({ moodToggle: true });
            return;
        }
        if (!this.state.inputValue) {
            this.setState({ inputDanger: true });
            return;
        }

        this.props.onPost(this.state.mood, this.state.inputValue);
        this.setState({
            inputValue: '',
            mood: 'na'
        });
    }
}