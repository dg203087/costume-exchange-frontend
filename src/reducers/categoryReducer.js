export default function categoryReducer(state = {categories: []}, action) {
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return {categories: action.payload} 
        default: 
            return state
    }
}
