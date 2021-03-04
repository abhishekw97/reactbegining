import React from 'react'
function Rain(){
    return(
        <div>
            <h1>Rain Season</h1>
        </div>
    );

}
function Winter(){
    return(
        <div>
            <h1>Winter Season</h1>
        </div>
    );

}

export default function Ifesle(props) {
    if (props.season === "rainey"){
        return <Rain />;
    }
    else{
        return <Winter />
    }
}
