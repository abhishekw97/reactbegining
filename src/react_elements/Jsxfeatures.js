import React from 'react'

let city = {
    name:"Pune",
    county:"India"
}

export default function Jsxfeatures() {
    return (
        <div>
                 <h1 id="jsxfeatures" className="cool-text">Jsx Features</h1>
                <h1>Hello from {city.name} and country is {city.county}!</h1>
        </div>
    )
}
