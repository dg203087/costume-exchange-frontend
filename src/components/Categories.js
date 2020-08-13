import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'

const Categories = (props) =>  {
    return (
        <div>
            <ButtonGroup>
                <DropdownButton as={ButtonGroup} title="Categories" id="bg-nested-dropdown" variant='danger'>
                    {props.categories.map(category => 
                        <div key={category.id}> 
                            <Dropdown.Item><Link to={`/catgories/${category.id}`}>{category.name}</Link></Dropdown.Item>
                            <Dropdown.Item href={category.id}>{category.name}</Dropdown.Item>
                        </div>
                    )}
                </DropdownButton>
            </ButtonGroup>
        </div>
    )
}

export default Categories