import React from "react";

//parent to child communication
class Currency extends React.Component{
    render(){
        const currencycodes = ["INR","USD","EUR","GBP","CAD"];
        return(
            <select onChange={(evt)=> this.props.currencyChange(evt.target.value)}>
                {currencycodes.map(c=><option key={c}>{c}</option>)}
            </select>
        );
    }
}

export default Currency;