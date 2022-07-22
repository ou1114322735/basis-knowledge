const { actionTypes } = require("../action/movies");

export default function(state=[],{type,payload}){
    switch (type) {
        case actionTypes.setData:
            return payload
        default:
            return state;
    }
}