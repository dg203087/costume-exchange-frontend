import React from 'react'

//class because there is local state holding form values
class CostumeInput extends React.Component {
    //local state in a controlled form - not in redux store (would use store if going to edit a form to reuse form)
    state = {
        title: '',
        price: '', 
        category: '', 
        location: '',
        owner_name: '', 
        owner_email: '', 
        description: ''
    }

    //pass in event so it knows what it's changing
    handleChange = (event) => {

    }

    //use this because we're in a class component
    //handleChange automatically passes event to first parameter
    render() {
        return (
            <div>
                <form>
                    <label>Costume Listing Title: </label>
                    <input type='text' value={this.state.title} onChange={this.handleChange} placeholder="e.g., Batman Costume, medieval corset"/><br></br>
                    
                    <label>Price to Borrow/Sell: </label>
                    <input type='text' value={this.state.price} placeholder="e.g., $25, free to borrow"/><br></br>
                   
                    <label>Category: </label>
                    <select name='category' value={this.state.category}>
                        <option value="Film">Film</option>
                        <option value="Book">Book</option>
                        <option value="Comic">Comic</option>
                        <option value="Anime">Anime</option>
                        <option value="Other">Other</option>
                    </select><br></br>
                    
                    <label>Location/Neighborhood: </label>
                    <input type='text' value={this.state.location} placeholder="e.g., Midtown NYC, Astoria, Queens"/><br></br>
                   
                    <label>Owner Name: </label>
                    <input type='text' value={this.state.owner_name} /><br></br>
                   
                    <label>Owner E-mail: </label>
                    <input type='text'value={this.state.owner_email} /><br></br>
                    
                    <label>Costume Description: </label>
                    <textarea rows='4' cols='50' value={this.state.description} placeholder="e.g., Black catsuit, fits size small/medium. Available for trades/borrows only."/><br></br>
                </form>
            </div>
        )
    }
}

export default CostumeInput