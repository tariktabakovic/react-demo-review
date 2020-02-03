import React from 'react';


function Greet({whom, how, color}){
    return (
        <div
            className= "card greet">,
                <h1>
                    {how}, {whom}
                </h1>
        </div>
    );
}

Greet.dafaultProps= {
    color: 'green'
}

export default Greet;