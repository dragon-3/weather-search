import React from "react";
import "./List.css"
import Berlin from "./Berlin";
import London from "./London";
import Tokyo from "./Tokyo";
import Paris from "./Paris";
import Moscow from "./Moscow";

function WeatherList() {
    

    return(
        <div>
            <div className="content">
                <h2>Weather List</h2>
                <Berlin />
                <London />
                <Tokyo />
                <Paris />
                <Moscow />

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
        </div>
    )



}

export default WeatherList