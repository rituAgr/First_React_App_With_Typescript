import * as React from "react";

function BubbleBee() {
    let date = new Date().toDateString();
    return (
        <div>
            {date}
            <button>Get the Date</button>
        </div>
    );
}

export default BubbleBee;