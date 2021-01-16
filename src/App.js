import React from 'react';
import './App.css';
import Forecast1Day from './Forecast1Day/Forecast1Day';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weekForecast: []
        }
    }

    componentDidMount() {
        fetch("https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json")
        .then(res => res.json())
        .then(data => {
            this.setState({
                weekForecast: data
            });
        });
    }
    
    render() {
        return (
            <div className="App">
                {this.state.weekForecast.map(dayForecast => {
                    return <Forecast1Day icon={dayForecast.icon} temprature={dayForecast.temperature} description={dayForecast.description} dayNum={dayForecast.day}/>
                })}
            </div>
        );
    }
}

export default App;
