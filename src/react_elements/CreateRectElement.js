import React from 'react'

export default function CreateRectElement() {
    return (
       React.createElement( "div",{style:{color:"red"}},
        React.createElement("h1",null," React Create Elements"),
        React.createElement("h1",{style:{color:"blue"}}," Create Multiple Elements"),
       )

    )
}
