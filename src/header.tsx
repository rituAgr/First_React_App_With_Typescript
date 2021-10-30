import * as React from "react";
import {useEffect} from "react";

type HeaderProps = {
    text?: String
}

function Header(props: HeaderProps) {

    useEffect(
        () => {alert(document.querySelector("#header-Id"))},
        []
    );
    return (
        <div>
            <h1 id="header-Id" className="primary-header" >{props.text}</h1>
        </div>
    );
}

export { Header };