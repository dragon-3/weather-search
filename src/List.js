import React from "react";
import "./List.css"
import {useState, useEffect} from "react"

function List() {
    const [location, setLocation] = useState("")
    const [data, setData] = useState([])
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e7946f7765931c840a35548ad3fa50c4`
    const london = `https://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&appid=e7946f7765931c840a35548ad3fa50c4`
    const tokyo = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=imperial&appid=e7946f7765931c840a35548ad3fa50c4`
    const barcelona = `https://api.openweathermap.org/data/2.5/weather?q=barcelona&units=imperial&appid=e7946f7765931c840a35548ad3fa50c4`
    const pyongyang = `https://api.openweathermap.org/data/2.5/weather?q=pyongyang&units=imperial&appid=e7946f7765931c840a35548ad3fa50c4`
    const paris = `https://api.openweathermap.org/data/2.5/weather?q=paris&units=imperial&appid=e7946f7765931c840a35548ad3fa50c4`

    useEffect = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData([data]))
    }

    const searchLocation = (event) => {
        if (event.key == 'Enter') {
            fetch(url)
            .then((response)=> response.json())
            .then((data) => setData([data]))
        }
    }

    return(
        <div>
            <div className="content">
                <h2>Weather List</h2>
                <div className="search">
                    <input type="text" onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} />
                </div>
                    <div className="list">
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
                    </div>
            </div>
        </div>
    )
}

// class List extends React.Component {
    
//     constructor() {
//         super();

//         this.state = {

//             location: "",
//             url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e7946f7765931c840a35548ad3fa50c4`,
//             data: []
//         }
//     }

//     componentDidMount() {
//         fetch(this.state.url)
//         .then((response) => response.json)
//         .then((data) => data)
//     }

//     search = () => {

//     }

//     render() {
//         return(

            // <div className="content">
            //     <h2>Weather List</h2>
            //     <div className="list">
            //         <table>
            //             <tbody>
            //                 <tr>
            //                     <th>City</th>
            //                     <th>Temp</th>
            //                 </tr>
            //                 <tr>
            //                     <td>x</td>
            //                     <td>y</td>
            //                 </tr>
                            
            //             </tbody>
            //         </table>
            //     </div>
            // </div>
//         )
//     }
// }

export default List