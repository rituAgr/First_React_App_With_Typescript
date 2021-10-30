import * as React from "react";
import {useState} from "react";
import frootLoop from "./froot-loop";

function BubbleBee() {

    let [time, setTime] = useState("");

    let getTime = () => {
        setTime(new Date().toTimeString());
    }
    return (
        <div>
            {time}
            <button onClick={getTime}>Get the Time</button>
        </div>
    );
};
BubbleBee.displayName = 'CustomDate';

export default BubbleBee;