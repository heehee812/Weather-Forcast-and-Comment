import React from 'react';
import PropTypes from 'prop-types';
import './Forecast.css';

export default class Forecast extends React.Component {
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
        return (
            <div className="forecast">
                <br></br>
                <p>Forecast ~~~~~~</p>
            </div>
        );
    }
}