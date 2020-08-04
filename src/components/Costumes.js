//functional - renders a list of costumes - don't need render
//have to pass the props in as an argument
//refactor with deconstruction

import React from 'react'

const Costumes = ({costumes}) => {

    return (
        <div>
            <b>Costumes List</b>
            {costumes.map(costume => 
                <li key={costume.id}>
                    <b>{costume.title} - {costume.price}</b><br></br>
                    {costume.category.name}<br></br>
                    {costume.location}<br></br>
                    {costume.owner_name} - {costume.owner_email}<br></br>
                    {costume.description}<br></br>
                </li>
            )}
        </div>
    )
}
export default Costumes