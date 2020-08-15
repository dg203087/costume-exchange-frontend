// import { DirectUpload } from 'activestorage'

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
        // .then(data => uploadFile(photo, data))
    }

}

// const uploadFile = (file, costume) => {
    
//     const upload = new DirectUpload(file, 'http://localhost:3000/api/v1/rails/active_storage/direct_uploads')
//     debugger
//     upload.create((error, blob) => {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log('no error')
//         }
//     })
// }