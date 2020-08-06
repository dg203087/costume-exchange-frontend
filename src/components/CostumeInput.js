import React from 'react'
import { connect } from 'react-redux'
import { addCostume } from '../actions/addCostume'

//class because there is local state holding form values
class CostumeInput extends React.Component {
    //local state in a controlled form - not in redux store (would use store if going to edit a form to reuse form)
    state = {
        title: '',
        price: '', 
        location: '',
        owner_name: '', 
        owner_email: '', 
        description: '',
        photos: null,
        category_id: 1
    }

    // handleChange automatically passes event to first parameter
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            //abstrating value of name to be whichever form input is changing
            //inside of brackets because a key in an object can't have periods - kind of like order of operations "evaluate this first"
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() //prevent from re-render
        this.props.addCostume(this.state) //needs argument to pass into action
        // setState is asynch - doesn't matter which order it is placed in
        this.setState({
            title: '',
            price: '', 
            location: '',
            owner_name: '', 
            owner_email: '', 
            description: '',
            photos: null,
            category_id: 1
        })
    }

    // render - only in class component
    render(props) {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Costume Listing Title: </label>
                    <input name="title" type='text' value={this.state.title} onChange={this.handleChange} placeholder="e.g., Batman Costume, medieval corset"/><br></br>
                    
                    <label>Price to Borrow/Sell: </label>
                    <input name="price" type='text' value={this.state.price} onChange={this.handleChange} placeholder="e.g., $25, free to borrow"/><br></br>
                   
                    {/* <label>Select a Category: </label>
                    <select name='category_id' value={this.props.category_id} onChange={this.handleChange} >
                        {this.props.categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                    </select><br></br> */}
                    
                    <label>Location/Neighborhood: </label>
                    <input name="location" type='text' value={this.state.location} onChange={this.handleChange} placeholder="e.g., Midtown NYC, Astoria, Queens"/><br></br>
                   
                    <label>Owner Name: </label>
                    <input name="owner_name" type='text' value={this.state.owner_name} onChange={this.handleChange} /><br></br>
                   
                    <label>Owner E-mail: </label>
                    <input name="owner_email" type='text'value={this.state.owner_email} onChange={this.handleChange} /><br></br>
                    
                    <label>Costume Description: </label>
                    <textarea name="description" rows='4' cols='50' value={this.state.description} onChange={this.handleChange} placeholder="e.g., Black catsuit, fits size small/medium. Available for trades/borrows only."/><br></br>
                    <input type="submit"/><br></br>
                </form>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//       categories: state.categoryReducer.category
//     }
// }  

//responsible to adding data to store - don't need mapStateToProps
//without thunk we would have to call mapDispatch, but now we have access to it in the action
export default connect(null, {addCostume})(CostumeInput)