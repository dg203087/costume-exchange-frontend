export const filterCostume = (categoryID, costumeProps) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/costumes/categories/${categoryID}`)
        .then(response => response.json())
        .then(costume => dispatch({
            type: 'FETCH_COSTUMES', 
            payload: costume
        }))
    }
}