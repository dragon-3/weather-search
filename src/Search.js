// import React from "react";
// import "./List.css"
// import {useState, useEffect} from "react"
// import "./Search.css"

// function Search() {
    

//     const [location, setLocation] = useState('')
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e7946f7765931c840a35548ad3fa50c4`
//     const [data, setData] = useState([])

//     useEffect(() => {
//         fetch(url)
//         .then((response) => {
//             response.json()
//         })
//         .then((data) => 
//             setData(
//                 [data]
//             )
//         )
//     }, []);

//     const SearchLocation = (event) => {
//         if (event.key == 'Enter') {
//             fetch(url)
//             .then((response) => 
//                 response.json()
//             )
//             .then((data) => {
//                 setData(
//                     data
//                 )
//             })
//         }
//     }


//     return(
//         <div>
            
//                 <div className="top">
//                     <div className="search">
//                         <input type="text" placeholder="Search" onChange={event => setLocation(event.target.value)} onKeyPress={SearchLocation} />
//                     </div>
//                     <div className="location">
//                         <h3>{data.name}</h3>
//                     </div>
//                     <div className="temp">
//                         {data.main ? <h1>{data.main.temp.toFixed()}F</h1>: null}
//                     </div>
//                 </div>
//                 <div className="bottom">
//                     <div className="feels">
//                         <p>Feels Like </p>
//                         {data.main ? <h1>{data.main.feels_like.toFixed()}</h1>: null}
//                     </div>
//                     <div className="humidity">
//                         <p>Humidity</p>
//                         {data.main ? <h1>{data.main.humidity}</h1>: null}
//                     </div>
//                     <div className="wind">
//                         <p>Wind Speed</p>
//                         {data.main ? <h1>{data.wind.speed}</h1>: null}
//                     </div>
//                 </div>
//         </div>
//     )
// }

// export default Search