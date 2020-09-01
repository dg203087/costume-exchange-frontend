import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import {fetchCategories} from '../actions/fetchCategories'
import Costumes from '../components/Costumes'
import Categories from '../components/Categories'

class CategoriesContainer extends React.Component { 
    
    constructor(props) {
        super(props)
        this.state = {
            category_id: 0
        }
    }

    componentDidMount(){
        this.props.fetchCategories()
    }

    renderCostumes = () => {
        const filteredCostumes = this.props.costumes.filter(costume => [costume.category.id].includes(this.state.category_id))
        const costumesByTitle = this.props.costumes.filter(costume => costume.title.toLowerCase().includes(this.state.searchBy.toLowerCase()))
       
        if (this.state.searchBy) {
           return <Costumes costumes={costumesByTitle} />
        } else if (this.state.category_id) {
            return <Costumes costumes={filteredCostumes} />
        } else {
            return <Costumes costumes={this.props.costumes} />
        }
        // return (this.state.category_id ? <Costumes costumes={filteredCostumes}/> : <Costumes costumes={this.props.costumes}/>)
    }

    filterCategories = (event) => {
        event.preventDefault()
        this.setState({
            category_id: parseInt([event.target.value])
        })
    }
    
    filterByTitle = (event) => {
        event.preventDefault()
        this.setState({
            searchBy: [event.target.value].toString()
        })
    }

    render() {
        return (
            <div>
                <div className="categories">
                    <h5>Filter Costumes by Category</h5>
                    {this.props.categories.map(category => 
                        <Button variant="danger" key={category.id} value={category.id} style={{margin: '10px'}} onClick={this.filterCategories}>{category.name}</Button>
                    )}
                        <Button variant="danger" style={{margin: '10px'}} onClick={() => this.setState({ category_id: 0 }) } >All Costumes</Button>
                </div>
                <br></br>
        
                 <div className='search_word'>
                    <FormControl type="search" placeholder="Search by Title" style={{width: '200px'}} onChange={this.filterByTitle}/>
                </div>

                <br></br>

                <div className='costumes'> 
                    {this.renderCostumes()}  
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categoryState.categories
    }
}


export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)
