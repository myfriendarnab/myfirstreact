import React from "react";
import { connect } from "react-redux"; //connect(how to connect/mappingFunction, what to connect/component) OR connect(how to fetch, what to modify)
import CurrencyActions from "../store/actions/currency-actions";

//parent to child communication
class Currency extends React.Component{
    render(){
        // const currencycodes = this.props.currencycodes;//["INR","USD","EUR","GBP","CAD"];
        const currencycodes = ["INR","USD","EUR","GBP","CAD"];
        return(
            <select onChange={(evt)=> this.props.currencyChange(evt.target.value)}>
                {currencycodes.map(c=><option key={c}>{c}</option>)}
            </select>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        currencyChange: code=>dispatch(CurrencyActions.updateCurrency(code)),
    };
};

export default connect(null, mapDispatchToProps)(Currency);