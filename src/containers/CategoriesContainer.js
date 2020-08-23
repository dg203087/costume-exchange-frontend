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
        return (this.state.category_id ? <Costumes costumes={filteredCostumes}/> : <Costumes costumes={this.props.costumes}/>)
    }

    filter = (event) => {
        event.preventDefault()
        this.setState({
            category_id: parseInt([event.target.value])
        })
    }

    render() {
        return (
            <div>
                <div className="categories">
                    <h5>Filter Costumes by Category</h5>
                    {this.props.categories.map(category => 
                        <Button variant="danger" key={category.id} value={category.id} style={{margin: '10px'}} onClick={this.filter}>{category.name}</Button>
                    )}
                        <Button variant="danger" style={{margin: '10px'}} onClick={() => this.setState({ category_id: 0 }) } >All Costumes</Button>
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