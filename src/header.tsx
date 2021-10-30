import * as React from "react";

type HeaderProps = {
    text?: String
}

function Header(props: HeaderProps) {
    return (
        <div>
            <h1 className="primary-header" >{props.text}</h1>
        </div>
    );
}

export { Header };