import * as React from "react";
import {useState} from "react";

function BubbleBee() {

    let [time, setTime] = useState("");

    let getTime = () => {
        setTime(new Date().toTimeString());
        alert(time);
    }
    return (
        <div>
            {time}
            <button onClick={getTime}>Get the Time</button>
        </div>
    );
}

export default BubbleBee;