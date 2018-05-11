import { createStore } from 'redux';

const reducer = (state, action) => {
    switch(action.type) {
        case "READ_EMAIL":
            return {    
                email: state.email.concat(action.email)
            }
            console.log('action to read email', action);
        break;
        case "REMOVE_EMAIL":
            console.log("action to remove email");
        break;
    }
    return state;
};

export default createStore(reducer, { email: [] });