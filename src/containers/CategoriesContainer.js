import React from 'react'
import { connect } from 'react-redux'

import {fetchCategories} from '../actions/fetchCostumes'



class CategoriesContainer extends React.Component {
    
    //connect function to redux store
    componentDidMount(){
        this.props.fetchCategories()
    }

    render() {
        return (
            <div>
                Costumes by Category
                {/* <CostumeInput /><br></br>
                <Costumes costumes={this.props.costumes} /> */}
            </div>
        )
    }
}

//to see info use mapStateToProps
//give this access to these props
const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}


export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)