export const deleteCostume = (costumeID) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/costumes/${costumeID}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(costume => dispatch({
            type: 'DELETE_COSTUME', 
            payload: costume
        }))
    }
}