import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import './PostList.css';

export default class PostList extends React.Component {
    static propTypes = {
        posts: PropTypes.array,
        filter: PropTypes.string,
        onVote: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
        };

        this.handleVote = this.handleVote.bind(this);
    }

    render() {
        return (<p>Post List</p>);
    }

    handleVote(id, mood) {
        this.props.onVote(id, mood);
    }
}