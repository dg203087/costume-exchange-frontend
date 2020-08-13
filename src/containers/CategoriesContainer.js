import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import {fetchCategories} from '../actions/fetchCategories'
import Categories from '../components/Categories'
import Category from '../components/Category'

class CategoriesContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchCategories()
    }

    render() {
        return (
            <div>
                <Categories categories={this.props.categories} />
                <br></br>
                <Route path='/categories/:id' render={(routerProps) => <Category {...routerProps} categories={this.props.categories}/> } />
                <Route path='/categories' render={(routerProps) => <Categories {...routerProps} categories={this.props.categories}/> } />
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
// export default CategoriesContainer