//action comes from action creator
//function that takes in
//1. state (object) usually previous state and 
//2. action
export default function costumeReducer(state = {costumes: []}, action) {
    
    switch (action.type) {
        case 'FETCH_COSTUMES':
            return {costumes: action.payload} //new state
        case 'ADD_COSTUME':
            return {...state, costumes: [...state.costumes, action.payload]} //returns all state
        default: 
            return state
    }
}