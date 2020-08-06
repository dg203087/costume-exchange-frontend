//functional component - presentational - display - no state
import React from 'react'

const Costume = (props) => {
    
    let costume = props.costumes[props.match.params.id - 1]
    
    return (
        <div>
            <li>
            <b>{costume ? costume.title : null } - {costume ? costume.price : null }</b><br></br>
            {costume ? costume.location : null }<br></br>
            {costume ? costume.owner_name : null } - {costume ? costume.owner_email : null }<br></br>
            {costume ? costume.description : null }<br></br><br></br>
            </li>
        </div>
    )
}

export default Costume