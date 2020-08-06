//functional - renders a list of costumes - don't need render
//have to pass the props in as an argument
//refactor with deconstruction

import React from 'react'
import Costume from './Costume'

const Costumes = ({costumes}) => {

    return (
        <div>
            {costumes.map(costume => 
                <div key={costume.id}>
                    <Costume costume={costume}/>
                </div>
            )}
        </div>
    )
}
export default Costumes