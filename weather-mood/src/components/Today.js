import React from 'react';
import PropTypes from 'prop-types';
import './Today.css';

export default class Today extends React.Component {
    static propTypes = {
        unit: PropTypes.string,
        searchText: PropTypes.string,
        onUnitChange: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            masking: true,
            postLoading: false,
            posts: []
        };

    }
    render() {
        const { unit } = this.props;
        const { group, city, masking, posts, postLoading } = this.state;
        return (
            <div className="today">
                <p>today is gonna be a good day to you!</p>
            </div>
        );
    }
}