//functional component - presentational - display - no state
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
// import { Redirect } from 'react-router-dom'
//to fix: null routes/redirect

const Costume = (props) => {
    // let costume = props.costumes[props.match.params.id - 1]
    let costume = props.costumes.filter(costume => costume.id == props.match.params.id)[0]
    console.log(costume)
    return (
        <div>
            {/* {costume ? null : <Redirect to='/costumes'/> */}
            <Card border="danger">
                <Card.Header as="h5">
                    {costume ? costume.title : null } - {costume ? costume.price : null } 
                </Card.Header>
                {/* <Card.Img variant='top' src={costume.photo} /> */}
                <Card.Body>
                  <Card.Title>Category: {costume ? costume.category.name : null }</Card.Title>
                  <Card.Text>
                        <b>Location: </b>{costume ? costume.location : null }<br></br>
                        <b>Owner Name: </b>{costume ? costume.owner_name : null }<br></br>
                        <b>Owner E-Mail: </b>{costume ? costume.owner_email : null }<br></br>
                        <b>Costume Description: </b>{costume ? costume.description : null }<br></br>
                  </Card.Text>
                  <Button href={`/costumes`} variant='danger'>Return to Costume List</Button>
                </Card.Body>
              </Card>
            
        </div>
    )
}

export default Costume