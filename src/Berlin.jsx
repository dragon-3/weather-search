import React from "react";
import "./WeatherInfo.css"
import Flag from 'react-flagkit';



class Berlin extends React.Component {

    constructor() {
        super();
        this.state = {
            url: `https://api.openweathermap.org/data/2.5/weather?q=berlin&units=imperial&appid=e7946f7765931c840a35548ad3fa50c4`,
            data: []
        }
    }

    componentDidMount() {
        fetch(this.state.url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data
            })
        })
    }

    render() {
        return(
            <div className="content">

                <table>
                    <div className="info">
                        

                        <div className="country">
                            <td><Flag country="DE" /></td>
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
                        
                            
                    </div>
                </table>

            

                {/* <div className="list">
                    <table>
                        <tbody>
                            <tr>
                                <th>City</th>
                                <th>Temp</th>
                            </tr>
                            <tr>
                                <td>x</td>
                                <td>y</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div> */}
            </div>
        )
    }
}

export default Berlin