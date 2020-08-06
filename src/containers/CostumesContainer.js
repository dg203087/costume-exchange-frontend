import React from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'

import {fetchCostumes} from '../actions/fetchCostumes'
// import {fetchCategories} from '../actions/fetchCategories'
import CostumeInput from '../components/CostumeInput'
import Costumes from '../components/Costumes'
import Costume from '../components/Costume'


class CostumesContainer extends React.Component {
    
    //connect function to redux store
    componentDidMount(){
        this.props.fetchCostumes()
    }
//categories={this.props.categories}
// want to set up routes in this container - where we have access to props
//conditionally rendered based on url
    render() {
        return (
            <div>
                <Route path='/costumes/new' component={CostumeInput}/>
                <Route path='/costumes/:id' render={(routerProps) => <Costume {...routerProps} costumes={this.props.costumes}/> } />
                <Route exact path='/costumes' render={(routerProps) => <Costumes {...routerProps} costumes={this.props.costumes}/> } />
            </div>
        )
    }
}

//to see info use mapStateToProps
//give this access to these props
const mapStateToProps = state => {
    return {
        costumes: state.costumes,
        // categories: state.categories
    }
}

export default connect(mapStateToProps, {fetchCostumes})(CostumesContainer)