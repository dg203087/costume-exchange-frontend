//functional - renders a list of costumes - don't need render
//have to pass the props in as an argument
//refactor with deconstruction

import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardColumns } from 'react-bootstrap'
// import CategoriesContainer from '../containers/CategoriesContainer'

const Costumes = (props) => {

    return (
        <div>
            {/* <CategoriesContainer /> */}
            <center><h2>Available Costumes</h2></center>
                        
            <CardColumns>
            {props.costumes.map(costume => 
                <Card key={costume.id} border="danger" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={costume.photo} />
                    <Card.Body>
                        <Link to={`/costumes/${costume.id}`} style={{ color: '#E74C3C' }} >
                        <Card.Title>{costume.title} - {costume.price}</Card.Title></Link>
                        <Card.Text>
                            {costume.category.name}
                        </Card.Text>
                    </Card.Body>
                </Card> 
            )}
            </CardColumns>
        </div>
    )
}
export default Costumes