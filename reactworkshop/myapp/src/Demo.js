import React from "react";
import NestedDemo from "./NestedDemo";

class Demo extends React.Component{
    render(){
        const name = "arnab";
        return(
            <div id="demo">
                <h1>Demo Component</h1>
                <p>Hello from {name}</p>
                <NestedDemo />
            </div>
        );
    }
}

export default Demo;