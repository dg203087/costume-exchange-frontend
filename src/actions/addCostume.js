export const addCostume = (data) => {
    //using thunk - dispatch function can be called within action
    //needs to be sent to back end
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/costumes', {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify(data) 
        })
        //want to load without refreshing
        .then(response => response.json())
        .then(costume => dispatch({
            type: 'ADD_COSTUME', 
            payload: costume
        }))
    }
}