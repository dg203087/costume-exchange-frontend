import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import {fetchCategories} from '../actions/fetchCategories'
import {filterCostume} from '../actions/filterCostume'
import Costumes from '../components/Costumes'
// import Categories from '../components/Categories'

class CategoriesContainer extends React.Component { 
    
    constructor(props) {
        super(props)
        this.state = {
            costumes: [this.props.costumes]
        }
    }

    componentDidMount(){
        this.props.fetchCategories()
    }

    filter = (event) => {
        event.preventDefault()
        const categoryID = event.target.value
        const costumeProps = this.props.costumes
        // const filteredCostumes = this.props.costumes.filter(costume => [costume.category.id] == categoryID)
        // console.log(filteredCostumes)
        this.props.filterCostume(categoryID, costumeProps)
        // this.setState({
        //     costumes: filteredCostumes
        // }
    }


    render() {
        return (
            <div>
                <div className="all_categories">
                
                    <h5>Filter Costumes by Category</h5>
                    {this.props.categories.map(category => 
                        <Button variant="danger" key={category.id} value={category.id} style={{margin: '10px'}} onClick={this.filter}>{category.name}</Button>
                    )}
                        <Button to='/costumes' variant="danger" style={{margin: '10px'}}>All Costumes</Button>
                </div>
                <br></br>
                <div className='all_costumes'> 
                    <Costumes costumes={this.props.costumes}/>   
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

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories, 
        filterCostume: (categoryID, costumeProps) => dispatch(filterCostume(categoryID, costumeProps))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)