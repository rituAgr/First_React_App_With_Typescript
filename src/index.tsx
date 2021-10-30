import * as React from "react";
import * as ReactDOM  from "react-dom";
import { Header } from "./header";
import CustomDate from "./customdate";

ReactDOM.render(
    <div>
        <Header text='Good Morning'/>
        <CustomDate/>
    </div>,
    document.querySelector('#root')
);
