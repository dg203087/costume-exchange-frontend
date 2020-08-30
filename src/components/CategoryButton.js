import React from 'react'
import { Button } from 'react-bootstrap'

const CategoryButton = ({category}) =>  {
    
    let buttonName = category ? category.name : "All Costumes"
    return (
        <div>
                <Button class="btn-group" variant="danger" style={{margin: '10px'}}>
                    {buttonName}
                </Button>
        </div>
    )
}

export default CategoryButton
