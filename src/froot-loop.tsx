import * as React from "react";

function frootLoop() {
    let fruits : Array<String> = [
      'orange',
      'mango',
      'cherry'
    ];

    return (
        <ul>
            {fruits.map((value , index) => {
                let color = "";
                if(value === 'mango')
                    color ='yellow';
                return (
                    <li style={{color: color}} key={index}>{value}</li>
                )
            })}
        </ul>
    );
}

export default frootLoop;
