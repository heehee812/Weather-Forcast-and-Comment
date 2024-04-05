import React from 'react';
import PropTypes from 'prop-types';

import './WeatherDisplay.css';

import './WeatherForm.css';

export default class WeatherDisplay extends React.Component {
    static propTypes = {
        masking: PropTypes.bool,
        group: PropTypes.string,
        description: PropTypes.string,
        temp: PropTypes.number,
        unit: PropTypes.string
    };

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <p>Weather Display~~~~</p>
        );
    }
}