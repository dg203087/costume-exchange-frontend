import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardColumns } from 'react-bootstrap'
import Costumes from '../components/Costumes'

const Categories = (props) =>  {
    debugger
    return (
        <div>
            {props.category.name}
            {/* <if ({props.costumes.category.id] === }
                <h2>{category.name}</h2>
                <Costumes costumes={props.costumes}/>  */}
        </div>
    )
}

export default Categories