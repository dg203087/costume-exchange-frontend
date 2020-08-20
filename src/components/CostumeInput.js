import React from 'react'
import { connect } from 'react-redux'
import { addCostume } from '../actions/addCostume'
import { Form, Button, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

//class because there is local state holding form values
class CostumeInput extends React.Component {
    //local state in a controlled form - not in redux store (would use store if going to edit a form to reuse form)
    
    constructor(props) {
        super()
        this.state = {
            title: '',
            price: '', 
            location: '',
            owner_name: '', 
            owner_email: '', 
            description: '',
            // photo: {},
            photo: '',
            category_id: 1,
            // categories: [
            //     {id: 1, name: 'Film'}
            // ]
        }
    }

    // handleChange automatically passes event to first parameter
    handleChange = (event) => {
        // if (event.target.name === 'photo') {
        //     this.setState({
        //         [event.target.name]: event.target.files[0]
        //     })
        // } else {
            this.setState({
                [event.target.name]: event.target.value
                //abstraction - inside of brackets because a key in an object can't have periods - kind of like order of operations "evaluate this first"
            })
        // }
    }

    // handleImageChange = (event) => {
        
    //     if (event.target.value) {
    //         // let path = event.target.value
    //         // let newPath = path.replace(/^C:\\fakepath\\/, "")
    //         this.setState({ 
    //             photo: event.target.files[0]
    //         })
    //     }
    // }

    handleSubmit = (event) => {
        event.preventDefault() 
        
        // let costume = {
        //     title: this.state.title,
        //     price: this.state.price, 
        //     location: this.state.location,
        //     owner_name: this.state.owner_name, 
        //     owner_email: this.state.owner_email, 
        //     description: this.state.description,
        //     category_id: this.state.category_id
        // }

        // let photo = {
        //     photo: this.state.photo
        // }
        
        this.props.addCostume(this.state) 
        this.setState({
            title: '',
            price: '', 
            location: '',
            owner_name: '', 
            owner_email: '', 
            description: '',
            photo: '',
            category_id: 1,
            // categories: [
            //     {id: 1, name: 'Film'}
            // ]
        })
        this.props.history.push('/costumes')
    }

    render() {
        return (
            <div>
                <center><h2>Add A Costume Listing</h2></center>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Col} >
                        <Form.Label>Costume Listing Title: </Form.Label>
                        <Form.Control name="title" type='text' value={this.state.title} onChange={this.handleChange} placeholder="e.g., Batman Costume, medieval corset"/>
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Price to Borrow/Sell: </Form.Label>
                        <Form.Control name="price" type='text' value={this.state.price} onChange={this.handleChange} placeholder="e.g., $25, free to borrow"/>
                    </Form.Group>
                   
                    <Form.Group as={Col} >
                    <Form.Label>Select a Category: </Form.Label>
                    <Form.Control as="select" name='category_id' onChange={this.handleChange}>
                        {this.props.categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                    </Form.Control>
                    </Form.Group>
                    
                    <Form.Group as={Col} >
                        <Form.Label>Location/Neighborhood: </Form.Label>
                        <Form.Control name="location" type='text' value={this.state.location} onChange={this.handleChange} placeholder="e.g., Midtown NYC, Astoria, Queens"/>
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Owner Name: </Form.Label>
                        <Form.Control name="owner_name" type='text' value={this.state.owner_name} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Owner E-mail: </Form.Label>
                        <Form.Control name="owner_email" type='text'value={this.state.owner_email} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Costume Description: </Form.Label>
                        <Form.Control as="textarea" name="description" rows='4' cols='50' value={this.state.description} onChange={this.handleChange} placeholder="e.g., Black catsuit, fits size small/medium. Available for trades/borrows only."/>
                    </Form.Group>

                    {/* <Form.Group as={Col} >
                        <Form.File name="photo" accept="image/png, image/jpeg" label="Upload Costume Photo:" onChange={this.handleChange}/>
                    </Form.Group> */}

                    <Form.Group as={Col} >
                        <Form.Label>Upload Costume URL: </Form.Label>
                        <Form.Control name="photo" type='text' value={this.state.photo} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} >
                    <Button type="submit" variant="danger">Post Costume</Button><br></br>
                    </Form.Group>
                    
                </Form>
            </div>
        )
    }
}

//responsible to adding data to store - don't need mapStateToProps
//without thunk we would have to call mapDispatch, but now we have access to it in the action
export default connect(null, {addCostume})(withRouter(CostumeInput))