import React from 'react';

import ForecastDisplay from 'components/ForecastDisplay.jsx';
import './Forecast.css';

export default class Forecast extends React.Component {
    static getInitWeatherState() {
        return {
            city: 'na',
            code: -1,
            group: 'na',
            description: 'N/A',
            descriptionArr: [],
            temp: NaN,
            tempArr: [],
            day: [],
            unit: "metric"
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            ...Forecast.getInitWeatherState(),
            loading: true,
            masking: true
        };

    }
    render() {
        const { unit } = this.props;
        return (
            <div>
                <ForecastDisplay {...this.state} />
                <div id="forecast-display">
                    <div className="col-sm-3 col-6">{this.state.day[1]}: {this.state.tempArr[1]}&ordm; <i className={"owf owf-" + this.state.code[1]}></i>  </div>
                    <div className="col-sm-3 col-6">{this.state.day[2]}: {this.state.tempArr[2]}&ordm; <i className={"owf owf-" + this.state.code[2]}></i>  </div>
                    <div className="col-sm-3 col-0">{this.state.day[3]}: {this.state.tempArr[3]}&ordm; <i className={"owf owf-" + this.state.code[3]}></i>  </div>
                    <div className="col-sm-3 col-0">{this.state.day[4]}: {this.state.tempArr[4]}&ordm; <i className={"owf owf-" + this.state.code[4]}></i>  </div>
                </div>
            </div>
        );
    }
}