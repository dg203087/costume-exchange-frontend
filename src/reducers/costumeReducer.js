export default function costumeReducer(state = {costumes: []}, action) {
    switch (action.type) {
        case 'FETCH_COSTUMES':
            return {costumes: action.payload} //new state
        case 'ADD_COSTUME':
            return {...state, costumes: [...state.costumes, action.payload]} //returns all state
        case  'DELETE_COSTUME':
            return {costumes: state.costumes.filter(costume => costume.id !== costume.id)}
        default: 
            return state
    }
}