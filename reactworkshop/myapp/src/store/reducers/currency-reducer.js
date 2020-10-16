import CurrencyActions from "../actions/currency-actions";

//reducer for currency update, this will analyse type of dispatcher
//and return the updated data to store

/**
 * 
 * @param {*} storeData data that will be stored
 * @param corresponding action -> currencyactions.js
 */
//always initialize the storedata with some default value
function currencyReducer(storeData = 'INR',action) {
    switch (action.type) {
        case CurrencyActions.ActionTypes.UPDATE_CURRENCY:
            return action.code; //return payload of action
    
        default:
            return storeData; //return current State
    }
}

export default currencyReducer;