import React from 'react'

function Lake({name})
{
    return(
           
           <h1>{name}</h1>
        );
}
function Hello(props)
{ 
   // console.log(Object.keys(props));
    return( <div>
            <h1>Hello I'm {props.name} </h1>
            <h2>From city {props.location}</h2>
            <h3>Total Number of Props {props.number}</h3>
            <p>{Object.keys(props).length} use of Object.keys(props).lenght 
            </p>
            </div>
            ); 
}
function Hellobyname({name ,location ,number})
{ 
   // console.log(Object.keys(props));
    return( <div>
             
            <h1>Hello I'm {name} </h1>
            <h2>From city {location}</h2>
            <h3>Total Number of Props {number}</h3>
            </div>
            ); 
}

export default function Comfun() {
    return (
        <div>
            <h1>Function and use of props</h1>
            <Hello name="Abhishek" location="Risod" number={3}/>
            <Hellobyname name="Abhishke" location="Unknown" number={3}/>
            <Lake name="Reasuable fun_comp1" />
            <Lake name="Reasuable fun_comp2" />
            <Lake name="Reasuable fun_comp3" />
        </div>
    )
}
