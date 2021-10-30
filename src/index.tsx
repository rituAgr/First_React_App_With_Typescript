import * as React from "react";
import * as ReactDOM  from "react-dom";
import { Header } from "./header";
import CustomDate from "./customdate";
import FrootLoop from "./froot-loop";

ReactDOM.render(
    <div>
        <Header text='Good Morning'/>
        <CustomDate/>
        <FrootLoop/>
    </div>,
    document.querySelector('#root')
);
