export function fetchCostumes() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/costumes')
        .then(response => response.json())
        .then(costumes => dispatch({
            type: 'FETCH_COSTUMES',
            payload: costumes
        }))
    }
}

// thunk - returns function from action creator - allows dispatch
// allows asynchronus when using backend - wait to dispatch until after fetch

//sent to reducer
// dispatch(actionObject)