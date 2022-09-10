import React from "react";
import "./WeatherInfo.css"
import Flag from 'react-flagkit';
import Clear from "./assets/Clear.jpg"
import Rain from "./assets/Rain.jpg"
import Clouds from "./assets/Clouds.jpg"



class Moscow extends React.Component {

    constructor() {
        super();
        this.state = {
            url: `https://api.openweathermap.org/data/2.5/weather?q=moscow&units=imperial&appid=e7946f7765931c840a35548ad3fa50c4`,
            data: [],
            weather: ""
        }
    }

    componentDidMount() {
        fetch(this.state.url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data,
                weather: data.weather[0].main
            })
        })
    }

    getIcon = () => {

        const icons = [Clear, Rain, Clouds];

        switch(this.state.weather) {
            case "Clear": 
                return icons[0]
                break;

            case "Rain":
                return icons[1]
                break;

            case "Clouds":
                return icons[2]
                break;
        }
    }

    render() {
        return(
            <div className="content">

                <table>
                    <div className="info">
                        

                        <div className="country">
                            <td><Flag country="RU" /></td>
                        </div>
                        <div className="city">
                            <td>{this.state.data.name}</td>
                        </div>
                        
                        <div className="main">
                            {this.state.data.weather? <td> {this.state.data.weather[0].main}</td>: null }
                        </div>
                        <div className="temp">
                            {this.state.data.main? <td> {this.state.data.main.temp.toFixed()}F</td>: null }
                        </div>

                        <div className="weather-icon">
                            <img src={this.getIcon()} alt="" />
                        </div>
                        
                            
                    </div>
                </table>
            </div>
        )
    }
}

export default Moscow