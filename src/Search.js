import React from "react";
import "./List.css"
import {useState, useEffect} from "react"

function Search() {
    return(
        <div>
            <div className="searchBar">
                <input type="text" value={"Search"}/>
            </div>
        </div>
    )
}

export default Search