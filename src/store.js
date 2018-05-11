import { createStore } from 'redux';

const reducer = (state, action) =>{
    switch(action.type) {
        case "READ_EMAIL":
            console.log('hasta aqui');
        break;
    }
    return state;
};

export default createStore(reducer, { email: [] });