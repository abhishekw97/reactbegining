import React from 'react'


export default function Renderlist({lakes}) {
    return (
        <div>
             <h1>Rendering List using const ListLake=["a","b","c"];</h1>
             <ul>
                 <li>{lakes.map(lake=>(
                        <div key={lake.id}>
                             <h2>{lake.name}</h2>
                             <p>City Name is :{lake.location}</p>
                        </div>
                 ))}</li>
            </ul>
        </div>
    )
}
