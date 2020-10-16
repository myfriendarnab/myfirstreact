const updateCurrency = code => {//Action for update currency
    return {        //action returning dispatcher object
        type:ActionTypes.UPDATE_CURRENCY,    //type of dispatcher
        code,       //object literal to pass code as additional payload to dispatcher
    };
};

const ActionTypes={
    UPDATE_CURRENCY:'[Currency] Update Currency Code'
};

const CurrencyActions = {ActionTypes, updateCurrency};
export default CurrencyActions;