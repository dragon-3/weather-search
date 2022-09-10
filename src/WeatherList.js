import React from "react";
import "./List.css"
import Berlin from "./Berlin";
import London from "./London";
import Tokyo from "./Tokyo";
import Paris from "./Paris";
import Moscow from "./Moscow";
import Search from "./Search";
import {useState, useEffect} from "react"
import "./Search.css"
import Clear from "./assets/Clear.jpg"
import Rain from "./assets/Rain.jpg"
import Clouds from "./assets/Clouds.jpg"

function WeatherList() {

    const [location, setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e7946f7765931c840a35548ad3fa50c4`
    const [data, setData] = useState([])
    const [display, setDisplay] = useState(false)
    const [weather, setWeather] = useState('')

    useEffect(() => {
        fetch(url)
        .then((response) => {
            response.json()
        })
        .then((data) => 
            setData(
                [data]
            )
        )
    }, []);

    const SearchLocation = (event) => {
        if (event.key == 'Enter') {
            fetch(url)
            .then((response) => 
                response.json()
            )
            .then((data) => {
                setData(
                    data
                );
                setWeather(data.weather[0].main);
            })
            setDisplay(true)
        }
    }

    const icons = [Clear, Rain, Clouds];

    const getIcon = (weather) => {
        switch(weather) {
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
    

    return(
        <div>
            <div className="content">
                <h2>Weather.com</h2>
                

                <div className="searchBar">
                    <input type="text" placeholder="Search" onChange={event => setLocation(event.target.value)} onKeyPress={SearchLocation} />
                </div>

                <div className="top">
                    <div className="location">
                        <h1>{data.name}</h1>
                    </div>
                    {display? 
                        <div className="image">
                            <img src={getIcon(weather)} alt="" />
                        </div>: null
                    }
                    <div className="middle">
                        <div className="faren">
                            {data.main ? <h1>{data.main.temp.toFixed()}F</h1>: null}
                        </div>
                        <div className="weather">
                                {data.weather? <h1> {data.weather[0].main}</h1>: null }
                        </div>
                    </div>
                </div>



                <div className="top-locations">
                    <h3>Top Locations</h3>
                    <Berlin />
                    <London />
                    <Tokyo />
                    <Paris />
                    <Moscow />
                </div>
                
            </div>
        </div>
    )



}

export default WeatherList