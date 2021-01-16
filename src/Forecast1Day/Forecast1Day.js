
import './Forecast1Day.css';
import React, { Component } from 'react';

class Forecast1Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weekday: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        }
    }

    render() {
        return (
            <div className="Forecast1Day">
                <h2>{this.state.weekday[this.props.dayNum]}</h2>
                <div className="img">
                    <img src={require(`./../icons/${this.props.icon}.png`)} alt={this.props.description}/>
                </div>
                <div className="weather-status">
                    <span className="degrees">{this.props.temprature}&#176;</span>
                    <span className="weather-description">{this.props.description}</span>
                </div>
            </div>
        );
    }
}

export default Forecast1Day;
